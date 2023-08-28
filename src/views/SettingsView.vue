<script setup lang="ts">
import { logout } from '@/firebase/auth';
import router from '@/router';

const handleLogout = async () => {
  await logout();
  router.push({ path: '/' });
};
</script>

<template>
  <button @click="handleLogout">Logout</button>
</template>