<script setup lang="ts">
import auth, { logout } from '@/firebase/auth'
import { updateUser } from '@/firebase/firestore'
import { updateProfile } from 'firebase/auth'
import router from '@/router'
import ProfileIconImage from '@/assets/profile-icon.png'
import { ref } from 'vue'

const user = ref(auth.currentUser)
if (!user.value) throw new Error('User not logged in')

const newDisplayName = ref(user.value.displayName)
const working = ref(false)

const handleUpdate = async () => {
  working.value = true
  user.value = auth.currentUser
  if (!user.value) return

  updateUser(user.value.uid, {
    displayName: newDisplayName.value ?? user.value.displayName ?? "New user"
  })

  await updateProfile(user.value, {
    displayName: newDisplayName.value
  })

  working.value = false
}

const handleLogout = async () => {
  await logout()
  router.push({ path: '/' })
}
</script>

<template>
  <main class="flex h-full w-full justify-center items-center">
    <div class="md:grid md:grid-cols-2 bg-surface-100 p-8 rounded-lg text-xl">
      <div class="flex md:hidden justify-center">
        <h1 class="text-6xl text-onDark">Settings</h1>
      </div>
      <div class="border-transparent md:border-surface-400 border-r-2 p-8 flex flex-col items-start gap-4">
        <img
          :src="user?.photoURL ? user.photoURL : ProfileIconImage"
          alt="Profile"
          class="w-32 aspect-square object-cover rounded-full"
          referrerpolicy="no-referrer"
        />
        <input
          v-model="newDisplayName"
          class="bg-surface-200 text-onDark p-2 rounded-lg focus:outline-none focus:bg-surface-300"
          placeholder="Display Name"
        />

        <button
          class="bg-primary text-onLight p-2 rounded-lg disabled:text-onDark transition-colors disabled:bg-surface-300 disabled:cursor-not-allowed"
          @click="handleUpdate"
          :disabled="newDisplayName === user?.displayName || !newDisplayName"
        >
          <span v-if="working">Saving...</span>
          <span v-else>Save</span>
        </button>
      </div>
      <div class="flex flex-col justify-evenly items-center gap-8">
        <h1 class="text-6xl text-onDark hidden md:inline">Settings</h1>
        <button
          @click="handleLogout"
          class="bg-error text-onLight p-2 rounded-lg hover:emphasis-high"
        >
          Logout
        </button>
      </div>
    </div>
  </main>
</template>
