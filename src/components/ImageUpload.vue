<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  image?: File | null
  defaultImage?: string
  setImage: (image: File | null) => void
}>()

const inputRef = ref<HTMLInputElement | null>(null)

const urlCreator = window.URL || window.webkitURL

const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file: File | null = (target.files as FileList)[0]
  props.setImage(file)
}
</script>

<template>
  <button
    className="group relative flex flex-col items-center h-48 w-48 border-2 rounded-lg border-primary"
    @click="() => inputRef?.click()"
  >
    <input
      className="hidden"
      type="file"
      accept="image/*"
      multiple="false"
      placeholder="Profile Picture"
      ref="inputRef"
      :onChange="handleInputChange"
    />
    <div
      v-if="image || defaultImage"
      className="absolute transition-colors duration-300 flex flex-col items-center justify-center w-full h-full group-hover:bg-[rgba(0,0,0,0.4)]"
    >
      <p className="text-xl transition-opacity opacity-0 group-hover:opacity-100">
        Change Profile Picture
      </p>
    </div>
    <div v-else className="absolute flex flex-col items-center justify-center w-full h-full">
      <p className="text-lg">Add Profile Picture</p>
    </div>

    <img
      v-if="image"
      :src="urlCreator.createObjectURL(image)"
      alt="Profile Picture"
      className="w-full h-full object-cover rounded-lg"
    />
    <img
      v-else-if="defaultImage"
      :src="defaultImage"
      alt="Profile Picture"
      className="w-full h-full object-cover rounded-lg"
    />
  </button>
</template>
