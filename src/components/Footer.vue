<template>
  <footer class="flex flex-col items-center gap-1 font-medium text-center mt-auto">
    <p>
      Desenvolvido por
      <a class="font-bold" href="https://github.com/Mikael-R" target="_blank">Mikael Aquino</a>
    </p>
    <p @click="copyPix" class="cursor-pointer">
      Gostou do projeto? Faça uma doação! <br />
      <span class="font-bold">{{ pixKey }}</span>
    </p>
    <p class="flex flex-row items-center gap-2">
      Ou deixe uma ⭐ no
      <a href="https://github.com/Mikael-R/credit-card-profit-calculator" target="_blank">
        <Github class="w-8 h-8" />
      </a>
    </p>
  </footer>
</template>

<script setup lang="ts">
import Github from '@/components/icons/github.vue'

const pixKey = '66be6fec-3717-442d-a350-96e81b0f7c65'

const copyPix = () => {
  navigator.clipboard.writeText(pixKey)
  alert('Chave PIX copiada!')
}
</script>
