<template>
  <div class="min-h-screen flex flex-col space-y-8 items-center justify-center">
    <ui-heading>Color placeholder</ui-heading>

    <ui-text>
      <p>What if you take something simpler than a stubby picture, and better in terms of UX?</p>
      <p>For example, Google Images first renders rectangles of different colors, on the places where images will soon be loaded. It looks pretty good, not as flashy as the same placeholders everywhere else, but it's still not perfect.</p>
      <p>If we can get some color from a picture from the server, then why not get Blurhash right away? We'll deal with that in the last step.</p>
    </ui-text>

    <client-only>
      <fa-icon class="animate-bounce" :icon="['fas', 'chevron-down']" />
    </client-only>
  </div>

  <div class="columns-1 md:columns-2 gap-8 text-center">
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
