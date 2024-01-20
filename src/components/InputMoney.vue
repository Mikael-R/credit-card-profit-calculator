<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" class="text-md">{{ label }}</label>
    <Money3Component
      v-bind="{ ...$attrs, ...baseOptions }"
      class="rounded-md h-10 shadow bg-[#0b2859] outline-none p-3"
      v-model="localValue"
      @keyup="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Money3Component } from 'v-money3'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Object,
    default: () => null
  }
})

const baseOptions = {
  decimal: ',',
  thousands: '.',
  prefix: 'R$ ',
  suffix: '',
  precision: 2,
  ...props.options
}

const localValue = ref(props.modelValue)

const onInput = () => {
  emit('update:modelValue', localValue.value)
}

watch(
  () => props.modelValue,
  (value) => {
    localValue.value = value
  }
)
</script>
