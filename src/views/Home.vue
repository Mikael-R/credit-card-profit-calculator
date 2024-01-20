<script setup lang="ts">
import useCalc from '@/composables/useCalc'
import HorizontalLine from '@/components/HorizontalLine.vue'
import Footer from '@/components/Footer.vue'
import InputMoney from '@/components/InputMoney.vue'
</script>

<template>
  <main class="p-4 lg:px-10 text-[#f2f2f2] bg-[#195ab4] min-h-screen flex flex-col">
    <h1 class="text-center text-3xl font-semibold m-3 lg:m-5">
      Calculadora de lucro com cartão de crédito💰
    </h1>
    <HorizontalLine />
    <div class="grid lg:grid-cols-4 gap-5">
      <InputMoney v-model="useCalc.form.dolarPrice" label="Valor atual do dólar" />
      <InputMoney
        :options="{
          prefix: '',
          precision: 1,
          decimal: '.',
          thousands: ''
        }"
        v-model="useCalc.form.pointsPerDolar"
        label="Pontos por dólar"
      />
      <InputMoney v-model="useCalc.form.invoiceValue" label="Valor da fatura do cartão" />
      <InputMoney v-model="useCalc.form.milesPrice" label="Valor do milheiro" />
      <InputMoney v-model="useCalc.form.monthlyPayment" label="Anuidade (mensal)" />
      <InputMoney
        :options="{
          prefix: '',
          suffix: '%',
          precision: 0
        }"
        v-model="useCalc.form.transferBonus"
        label="Bônus de transferência"
      />
    </div>
    <HorizontalLine />
    <div class="grid lg:grid-cols-4 gap-5">
      <InputMoney v-model="useCalc.annualProfit" label="Possível lucro anual" readonly />
      <InputMoney v-model="useCalc.monthlyProfit" label="Possível lucro mensal" readonly />
      <InputMoney v-model="useCalc.minimumInvoiceValue" label="Gastos mínimos" readonly />
      <InputMoney
        :options="{
          prefix: '',
          precision: 0,
          thousands: ' '
        }"
        v-model="useCalc.milesPerYear"
        label="Milhas acumuladas no ano"
        readonly
      />
    </div>
    <HorizontalLine />
    <Footer />
  </main>
</template>
