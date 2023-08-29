<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { auth } from '@/firebase/config'
import LoadingScreen from '@/components/LoadingScreen.vue'

const loadingUser = ref(true)

async function waitForAuth() {
  await auth.authStateReady()
  loadingUser.value = false
}

waitForAuth()
</script>

<template>
  <LoadingScreen v-if="loadingUser" />
  <RouterView v-if="!loadingUser" />
</template>
