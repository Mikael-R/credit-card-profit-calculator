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
    let miles = invoiceValue / form.value.dolarPrice * form.value.pointsPerDolar
    miles = miles + (miles * (form.value.transferBonus / 100))
    return toFixed(miles / 1000 * form.value.milesPrice - form.value.monthlyPayment)
  }

  const calculateMinimumInvoiceValue = () => {
    if (form.value.monthlyPayment <= 0) return 0;

    let testInvoiceValue = 10;
    let profit = -1

    while (profit < 0) {
      testInvoiceValue += 1
      profit = calculateMonthlyProfit(testInvoiceValue)
    }

    return testInvoiceValue;
  }

  const minimumInvoiceValue = computed(() => calculateMinimumInvoiceValue())

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