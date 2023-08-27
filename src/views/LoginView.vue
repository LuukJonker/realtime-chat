<script setup lang="ts">
import { ref } from 'vue'
import { signInWithEmailAndPasswordHandler, signInWithGoogle } from '@/firebase/auth'

const email = ref('')
const password = ref('')

const signInWithEmailAndPassword = async () => {
  await signInWithEmailAndPasswordHandler(email.value, password.value)
}

const signInWithGoogleHandler = async () => {
  await signInWithGoogle()
}
</script>

<template>
  <main class="w-full h-full flex justify-center items-center">
    <div class="flex flex-col bg-surface-100 p-8 rounded-lg gap-8">
      <h1 class="text-5xl font-bold text-center text-onDark">Sign In</h1>
      <div class="flex flex-col gap-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"
        />
        <button @click="signInWithEmailAndPassword" class="bg-primary rounded-full p-2">
          Sign In
        </button>
      </div>
      <button @click="signInWithGoogleHandler" class="bg-[#3c82f7] px-1 py-2 rounded-md">
        Sign In with Google
      </button>
    </div>
  </main>
</template>
