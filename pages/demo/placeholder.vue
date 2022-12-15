<template>
  <div class="text-center space-y-8">
    <image-intersection
        v-for="image of images"
        :key="image.name"
        :image="image"
        :src="'/img/placeholder.jpg'"
        :alt="image.name"
        class="inline-block"
    />
  </div>
</template>

<script setup lang="ts">
import images from '@/static/images.json'
</script>
