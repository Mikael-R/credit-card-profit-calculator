<script setup lang="ts">
import useCalc from '@/composables/useCalc'
import Input from '@/components/Input.vue'
</script>

<template>
  <main class="p-5 lg:px-10 text-[#f2f2f2] bg-[#195ab4]">
    <h1 class="text-center text-3xl font-semibold m-3 mb-6 lg:m-5 lg:mb-10">
      Calculadora de lucro de cartão de crédito
    </h1>
    <div class="grid lg:grid-cols-4 gap-5">
      <Input v-model="useCalc.form.dolarPrice" label="Valor atual do dólar" />
      <Input v-model="useCalc.form.pointsPerDolar" label="Pontos por dólar" />
      <Input v-model="useCalc.form.milesPrice" label="Valor do milheiro" />
      <Input v-model="useCalc.form.invoiceValue" label="Valor da fatura do cartão" />
      <Input v-model="useCalc.form.monthlyPayment" label="Anuidade (mensal)" />
      <Input v-model="useCalc.form.transferBonus" label="Bônus de transferência" />
    </div>
    <hr class="w-full my-5 border-t border-dashed border-[#f2f2f2]" />
    <div class="grid lg:grid-cols-4 gap-5">
      <Input v-model="useCalc.annualProfit" label="Possível lucro anual" readonly />
      <Input v-model="useCalc.monthlyProfit" label="Possível lucro mensal" readonly />
      <Input v-model="useCalc.minimumInvoiceValue" label="Gastos mínimos" readonly />
      <Input v-model="useCalc.milesPerYear" label="Milhas acumuladas no ano" readonly />
    </div>
  </main>
</template>
