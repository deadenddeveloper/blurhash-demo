<template>
  <ui-text class="text-center">
    <input type="text" v-model="blurhash" placeholder="Blurhash" />
    <div class="flex space-x-2">
    <input type="number" v-model="width" min="1" step="1" placeholder="Image width" />
    <input type="number" v-model="height" min="1" step="1"  placeholder="Image height" />
    </div>
    <div class="p-2 bg-orange-300 border border-orange-700 rounded-xl" v-if="error">{{ error }}</div>
    <div class="p-2 bg-red-300 border border-red-700 rounded-xl" v-if="!error && !base64">The blurhash seems to be wrong</div>
    <img v-if="base64" :src="base64" alt="" :height="height" :width="width" />
    <textarea v-if="base64" class="h-48" readonly>{{ base64 }}</textarea>
  </ui-text>
</template>

<script setup lang="ts">
import { blurhashToBase64 } from '@/utils/image'

const blurhash = ref('')
const width = ref(640)
const height = ref(480)

const base64 = computed(() => {
  if (null === error.value) {
    try {
      return blurhashToBase64(blurhash.value, parseInt('' + width.value), parseInt('' + height.value))
    } catch (e) {
      return null
    }
  }

  return null
})

const error = computed(() => {
  if (width.value < 1 || height.value < 1) {
    return 'Hm... something wrong with size'
  }

  if (width.value > 1000 || height.value > 1000) {
    return 'Believe me, you do not need so big blurhash placeholder'
  }

  if (!blurhash.value.length) {
    return 'Enter the blurhash string'
  }

  if (blurhash.value.length < 6) {
    return 'The blurhash string must be at least 6 characters'
  }

  return null
})
</script>
