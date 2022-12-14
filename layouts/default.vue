<template>
  <div class="bg-blue-100 flex flex-col min-h-screen">
    <blocks-header />
    <main class="container mx-auto flex-grow px-2 md:px-0 space-y-8 mb-24">
      <slot />
    </main>
    <blocks-footer />
  </div>
</template>
