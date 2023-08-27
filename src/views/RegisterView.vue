<script setup lang="ts">
import { ref } from 'vue'
import { registerWithEmailAndPasswordHandler } from '@/firebase/auth'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const displayName = ref('')
const profilePicture = ref(null)

const error = ref('')

const submit = async () => {
  if (password.value !== confirmPassword.value) {
    return
  }

  const { user, error } = await registerWithEmailAndPasswordHandler(
    email.value,
    password.value,
    displayName.value,
    profilePicture.value
  )


}
</script>

<template>
  <main class="w-full h-full flex justify-center items-center">
    <div class="flex flex-col bg-surface-100 p-8 rounded-lg gap-8">
      <h1 class="text-5xl font-bold text-center text-onDark">Register</h1>
      <div class="flex flex-col gap-4">
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
        <button @click="submit" class="bg-primary rounded-full p-2">Sign In</button>
      </div>
    </div>
  </main>
</template>
