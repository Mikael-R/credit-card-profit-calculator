<template>
  <div class="flex flex-col gap-1">
    <label class="text-md">{{ label }}</label>
    <input
      v-bind="$attrs"
      class="rounded-md h-10 shadow bg-[#0b2859] outline-none p-3"
      v-model="localValue"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})

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
