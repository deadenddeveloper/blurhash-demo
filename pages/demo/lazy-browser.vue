<template>
  <div>
    https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading

    https://stackoverflow.com/questions/57753240/native-lazy-loading-loading-lazy-not-working-even-with-flags-enabled
  </div>

  <div class="text-center space-y-8">
    <img
        v-for="image of images"
        :key="image.name"
        :src="`/img/demo/${image.name}?${new Date().getTime()}`"
        :alt="image.name"
        :width="image.width"
        :height="image.height"
        class="inline-block"
        loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
import images from '@/static/images.json'
</script>
