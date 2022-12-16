<template>
  <div class="min-h-screen flex flex-col space-y-8 items-center justify-center">
    <ui-heading>Blurhash placeholder</ui-heading>

    <ui-text>
      <p>Now, instead of stubs and colored rectangles, we will finally use images generated from Blurhash.</p>
      <p>We'll use the same approach with Intersection Observer, but only before loading the original image we'll quickly (relatively) generate a Base64 Blurhash placeholder and substitute it in the img tag.</p>
      <p>And then the change of images for the user will be much smoother. And if you add a small animation effect when changing images, then... However, see for yourself.</p>
      <p>The only problem with this approach is that the calculation of a large image requires relatively big resources. But it is possible to generate a small picture in the right proportions.</p>
    </ui-text>

    <client-only>
      <fa-icon class="animate-bounce" :icon="['fas', 'chevron-down']" />
    </client-only>
  </div>

  <div class="columns-1 md:columns-2 gap-8 text-center">
    <image-blurhash
        v-for="image of images"
        :key="image.name"
        :image="image"
    />
  </div>
</template>

<script setup lang="ts">
import images from '@/static/images.json'
</script>
