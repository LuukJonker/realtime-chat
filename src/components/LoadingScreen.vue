<script setup lang="ts">
import Facts from '@/assets/facts.json'

const idx = Math.floor(Math.random() * Facts.length)
const fact = Facts[idx]
</script>

<template>
  <div class="flex flex-col w-full h-full bg-surface justify-center items-center">
    <h1 class="text-onDark text-6xl animate-bounce p-8">Loading...</h1>
    <p class="text-onDark emphasis-high text-xl">{{ fact }}</p>
  </div>
</template>
