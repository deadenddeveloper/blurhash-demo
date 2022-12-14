<template>
  <header class="container py-4 px-2 md:px-0 mx-auto flex justify-between items-center">
      <div class="uppercase font-mono">
        <NuxtLink to="/">
          <span class="hidden md:inline-block">Blurhash</span>
          <span class="md:hidden">B#</span>
        </NuxtLink>
      </div>
    <nav class="mx-2">
      <ul class="flex items-center space-x-1 md:space-x-4 text-xs md:text-base">
        <li><NuxtLink active-class="font-bold" to="/">What is it</NuxtLink></li>
        <li><NuxtLink active-class="font-bold" to="/usage">How to use</NuxtLink></li>
        <li><NuxtLink active-class="font-bold" to="/converter">Converter</NuxtLink></li>
        <li><NuxtLink active-class="font-bold" to="/comparison">Comparison</NuxtLink></li>
        <li><NuxtLink active-class="font-bold" to="/about">About</NuxtLink></li>
      </ul>
    </nav>
    <div>
      <a href="https://github.com/deadenddeveloper/blurhash-demo" target="_blank" title="Github">
        <client-only>
          <fa-icon :icon="['fab', 'github']" />
        </client-only>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
