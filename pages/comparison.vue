<template>
  <ui-heading>Image loading ways comparison</ui-heading>

  <div>
    <NuxtLink to="/demo/not-lazy">demo no lazy</NuxtLink>
  </div>
  <div>
    <NuxtLink to="/demo/lazy-browser">demo lazy</NuxtLink>
  </div>
  <div>
    <NuxtLink to="/demo/intersection">intersection</NuxtLink>
  </div>
  <div>
    <NuxtLink to="/demo/placeholder">placeholder</NuxtLink>
  </div>
  <div>
    <NuxtLink to="/demo/color">color</NuxtLink>
  </div>
  <div>
    <NuxtLink to="/demo/blurhash">blurhash</NuxtLink>
  </div>

  <table class="w-full">
    <thead>
      <tr>
        <th>Way</th>
        <th>Description</th>
        <th>Pros</th>
        <th>Contras</th>
      </tr>
    </thead>
  </table>
</template>
