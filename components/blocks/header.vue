<template>
  <header class="container py-4 mx-auto flex justify-between">
      <div class="uppercase font-mono">
        <NuxtLink to="/">Blurhash</NuxtLink>
      </div>
    <nav>
      <ul class="flex items-center space-x-4">
        <li>What is it</li>
        <li>How to use</li>
        <li>Converter</li>
        <li>Comparison</li>
        <li><NuxtLink active-class="font-bold" to="/about">About</NuxtLink></li>
      </ul>
    </nav>
    <div>
      <a href="https://github.com/deadenddeveloper/blurhash-demo" target="_blank" title="Github">
        <fa-icon :icon="['fab', 'github']" />
      </a>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
