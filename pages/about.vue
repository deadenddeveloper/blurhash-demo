<template>
  <ui-heading>About this project</ui-heading>

  <ui-heading component="h2">Why then?</ui-heading>

  <div class="w-1/2 mx-auto space-y-4 indent-4">
    <p>I once came across a video in a YouTube recommendation that said something like, "You're not uploading images correctly." I was skeptical of the video, but decided to watch it someday. After a while, when I finally got to it in my long list of development videos, I realized I had saved it to that list for a reason.</p>
    <p>This video showed Blurhash technology, which can significantly improve the UX in terms of lazy loading of images.</p>
    <p>I shared information about this technology with colleagues at work, and they suggested I add a piece of documentation to our intranet. Then I thought, why not spend some time usefully and make a full-fledged demo project in which you can compare modern image loading methods and also get blurhashes from pictures online.</p>
    <p>You can watch it too, it's just below.</p>
  </div>
  <div class="text-center">
    <iframe
        class="inline-block"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/8viWcH5bUE4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
  </div>

  <ui-heading component="h2">Technologies within this project</ui-heading>

  <blocks-techs />

  <div class="text-center">The code is by <a href="https://github.com/deadenddeveloper/blurhash-demo" target="_blank" class="font-bold">Github</a>, feel free to contribute!</div>
</template>

<script setup lang="ts">
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'About Blurhash demo project' }
  ],
})
</script>
