<template>
  <div class="text-center space-y-8">
    <img
        v-for="image of images"
        :key="image.name"
        :src="`/img/demo/${image.name}?${new Date().getTime()}`"
        :alt="image.name"
        class="inline-block"
    />
  </div>
</template>

<script setup lang="ts">
import images from '@/static/images.json'
</script>
