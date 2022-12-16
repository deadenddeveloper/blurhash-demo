<template>
  <div class="min-h-screen flex flex-col space-y-8 items-center justify-center">
    <ui-heading>Loading on intersection</ui-heading>

    <ui-text>
      <p>Why not control the loading of images yourself, at the Javascript level? In this case our imagination is not limited and no browser limitations will interfere.</p>
      <p>In past, we had to keep track of items in a scroll event, counting coordinates and all that stuff. Now we have <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" class="underline">Intersection Observer</a>, which is a bit easier. So, we load the image only when it gets to the viewport.</p>
      <p>The scheme is simple - we hold the URL to the image somewhere, and when the <ui-code>img</ui-code> tag hits the viewport, we substitute that URL in <ui-code>src</ui-code> for it. Voila! The browser loads the picture.</p>
      <p>If you quickly scroll down the page, you can see that there is some nonsense in place of the unloaded pictures. We'll deal with that later.</p>
    </ui-text>

    <client-only>
      <fa-icon class="animate-bounce" :icon="['fas', 'chevron-down']" />
    </client-only>
  </div>

  <div class="columns-1 md:columns-2 gap-8 text-center">
    <image-intersection
        v-for="image of images"
        :src="''"
        :key="image.name"
        :image="image"
        :alt="image.name"
        class="inline-block mb-8"
    />
  </div>
</template>

<script setup lang="ts">
import images from '@/static/images.json'
</script>
