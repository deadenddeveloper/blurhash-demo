<template>
  <div class="h-screen bg-red-300">

  </div>

  <div class="text-center space-y-8">
    <image-intersection
        v-for="image of images"
        :src="''"
        :key="image.name"
        :image="image"
        :alt="image.name"
        class="inline-block"
    />
  </div>
</template>

<script setup lang="ts">
import images from '@/static/images.json'
</script>
