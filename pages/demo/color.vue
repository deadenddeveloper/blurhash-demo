<template>
  <div class="h-screen bg-red-300">

  </div>

  <div class="text-center space-y-8">
    <image-color
        v-for="image of images"
        :key="image.name"
        :image="image"
    />
  </div>
</template>

<script setup lang="ts">
import images from '@/static/images.json'
</script>
