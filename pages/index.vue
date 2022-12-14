<template>
  <ui-heading>What is Blurhash?</ui-heading>

  <ui-heading component="h2">Description</ui-heading>

  <ui-text>
    <div class="text-center">
      <img src="/img/blurhash_meme.jpg" alt="Meme" class="inline-block" />
    </div>
    <p>In short, Blurhash is an algorithm that can take any image and turn it into a string of up to 32 characters. This string can then be easily converted into another image that remotely resembles the source image. But as if a blur filter had been applied to it.</p>
    <p>For example, like this:</p>
  </ui-text>

  <div class="grid grid-cols-3 gap-4 text-center">
    <span>Original image</span>
    <span>Blurhash</span>
    <span>Blurhash representation</span>
    <div>
      <img src="/img/sample_orig.png" alt="Original image" />
    </div>
    <div class="flex items-center justify-center border border-black">
      <span class="text-xs lg:text-base break-all">L7BWJ80g0M%100xY~UIp#QoMEOae</span>
    </div>
    <div>
      <img src="/img/sample_bh.png" alt="Blurhash of an image" />
    </div>
  </div>

  <ui-heading component="h2">Helpful links:</ui-heading>

  <blocks-links />
</template>
