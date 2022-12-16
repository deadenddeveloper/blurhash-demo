<template>
  <div class="min-h-screen flex flex-col space-y-8 items-center justify-center">
    <ui-heading>Greedy loading</ui-heading>

    <ui-text>
      <p>This is the oldest way to download images and at the same time the worst. When the browser parses the HTML markup and comes across <ui-code>img</ui-code> tags, it will immediately load images. Of course, the more there are, the more requests the browser creates, the more traffic will pass from the server.</p>
      <p>It is possible that the user will not even reach some of the images, and it turns out that the browser has wasted resources. This is especially noticeable on mobile devices and where it is important to save traffic.</p>
      <p>Scroll down the page to see the results. If you have a good Internet connection, all or most of the images will be loaded. If not, you will be reminded of the days of dial-up modems. Nostalgia!</p>
    </ui-text>

    <client-only>
      <fa-icon class="animate-bounce" :icon="['fas', 'chevron-down']" />
    </client-only>
  </div>

  <div class="columns-1 md:columns-2 gap-8 text-center">
    <img
        v-for="image of images"
        :key="image.name"
        :src="`/img/demo/${image.name}?${new Date().getTime()}`"
        :alt="image.name"
        class="inline-block mb-8"
    />
  </div>
</template>

<script setup lang="ts">
import images from '@/static/images.json'
</script>
