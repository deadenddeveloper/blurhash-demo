<template>
  <div class="min-h-screen flex flex-col space-y-8 items-center justify-center">
    <ui-heading>Image placeholder</ui-heading>

    <ui-text>
      <p>Now when we control the loading of images ourselves, we should have some sort of placeholder in place of the image while it's loading.</p>
      <p>To do this, you can put some kind of stub in the <ui-code>img</ui-code> tag. This is not a very good option, because the image placeholder itself should also be loaded. At least once. And not every placeholder is convenient to substitute the images because of the differences in their dimensions.</p>
      <p>But this oversight we will fix further.</p>
    </ui-text>

    <client-only>
      <fa-icon class="animate-bounce" :icon="['fas', 'chevron-down']" />
    </client-only>
  </div>

  <div class="columns-1 md:columns-2 gap-8 text-center">
    <image-intersection
        v-for="image of images"
        :key="image.name"
        :image="image"
        :src="'/img/placeholder.jpg'"
        :alt="image.name"
        class="inline-block my-8"
    />
  </div>
</template>

<script setup lang="ts">
import images from '@/static/images.json'
</script>
