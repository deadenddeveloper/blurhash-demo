<template>
  <div class="min-h-screen flex flex-col space-y-8 items-center justify-center">
    <ui-heading>Browser-based lazy loading</ui-heading>

    <ui-text>
      <p>In 2019, it was finally added the ability to lazy load images at the browser level. All you need to do is add a special <ui-code>loading</ui-code> attribute to the <ui-code>img</ui-code> tag with one of three options (<ui-code>lazy</ui-code>. <ui-code>eager</ui-code> or <ui-code>auto</ui-code>).</p>
      <p>Full description <a href="https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading" target="_blank" class="underline">here</a>.</p>
      <p>However, in my opinion, this is not the best way for several reasons. Firstly, each browser engine decides when to load a picture, so your expectations might not match reality. Secondly, each <ui-code>img</ui-code>-tag <strong>MUST</strong> have the width and height, otherwise the results can be unpredictable. Up to the fact that the browser will load everything at once, and this is tantamount to not using lazy loading at all. <a href="https://stackoverflow.com/questions/57753240/native-lazy-loading-loading-lazy-not-working-even-with-flags-enabled" target="_blank" class="underline">Why?</a> Well, third, as of December 2022, <a href="https://caniuse.com/loading-lazy-attr" target="_blank" class="underline">not all browsers are still capable</a>.</p>
      <p>Open DevTools and watch for the "Network" tab. As you scroll, requests to the server should appear as you move down.</p>
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
        :width="image.width"
        :height="image.height"
        class="inline-block mb-8"
        loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
import images from '@/static/images.json'
</script>
