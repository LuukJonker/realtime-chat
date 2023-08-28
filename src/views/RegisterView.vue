<script setup lang="ts">
import { ref } from 'vue'
import { registerWithEmailAndPasswordHandler } from '@/firebase/auth'
import router from '@/router'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const displayName = ref('')
const profilePicture = ref<File | null>(null)

const displayError = ref('')

const loading = ref(false)

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file: File | null = (target.files as FileList)[0]
  profilePicture.value = file
}

const submit = async () => {
  loading.value = true
  if (password.value !== confirmPassword.value) {
    return
  }

  const { user, error } = await registerWithEmailAndPasswordHandler(
    email.value,
    password.value,
    displayName.value,
    profilePicture.value
  )

  if (error) {
    displayError.value = error.errorMessage
    loading.value = false
    return
  }

  router.push({ path: '/' })
}
</script>

<template>
  <main class="w-full h-full flex justify-center items-center">
    <div class="flex flex-col bg-surface-100 p-8 rounded-lg gap-8">
      <h1 class="text-5xl font-bold text-center text-onDark">Register</h1>
      <form class="flex flex-col gap-4" @submit.prevent="submit">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"
        />
        <input
          v-model="displayName"
          type="text"
          placeholder="Display Name"
          class="p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"
        />
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"
        />
        <input
          v-on:change="onFileChange"
          type="file"
          class="p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"
        />
        <button class="bg-primary rounded-full p-2 text-onLight text-lg">
          <p v-if="loading">Loading...</p>
          <p v-else>Register</p>
        </button>
      </form>
    </div>
  </main>
</template>
