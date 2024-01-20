import { ref, reactive, computed } from 'vue'
import { toFixed } from '@/utils'

const useCalc = () => {
  const form = ref({
    pointsPerDolar: 2.2,
    monthlyPayment: 0,
    dolarPrice: 5,
    invoiceValue: 4000,
    milesPrice: 17,
    transferBonus: 100
  })

  const milesPerMonth = computed(() => {
    let miles = form.value.invoiceValue / form.value.dolarPrice * form.value.pointsPerDolar
    if (form.value.transferBonus) miles += miles * form.value.transferBonus / 100
    return toFixed(miles)
  })

  const milesPerYear = computed(() => {
    return toFixed(milesPerMonth.value * 12)
  })

  const monthlyProfit = computed(() => {
    return toFixed(milesPerMonth.value / 1000 * form.value.milesPrice - form.value.monthlyPayment)
  })

  const annualProfit = computed(() => {
    return toFixed(monthlyProfit.value * 12)
  })

  const calculateMonthlyProfit = (invoiceValue = 0) => {
    let miles = invoiceValue / form.value.dolarPrice * form.value.pointsPerDolar;
    if (form.value.transferBonus) miles += miles * (form.value.transferBonus / 100);
    return toFixed(miles / 1000 * form.value.milesPrice - form.value.monthlyPayment);
  };

  const minimumInvoiceValue = computed(() => {
    if (!form.value.monthlyPayment || !form.value.dolarPrice || !form.value.pointsPerDolar || !form.value.milesPrice) return 0;

    let testInvoiceValue = 0;

    const maxIterations = 30000;
    let iterations = 0;

    while (calculateMonthlyProfit(testInvoiceValue) < 0 && iterations < maxIterations) {
      testInvoiceValue += 1;
      iterations += 1;
    }

    return calculateMonthlyProfit(testInvoiceValue) >= 0 ? testInvoiceValue : 0;
  });

  return reactive({
    form,
    milesPerMonth,
    milesPerYear,
    monthlyProfit,
    annualProfit,
    minimumInvoiceValue,
  })
}

export default useCalc()