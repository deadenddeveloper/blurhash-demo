<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
    <client-only>
      <div v-for="item in techs" :key="item.link">
        <a :href="item.link" target="_blank" class="flex flex-col space-y-2 justify-between items-center text-center">
          <fa-icon :icon="item.icon" />
          <span class="text-sm">{{ item.subtitle }}</span>
          <span class="text-sm sm:text-base md:text-xl">{{ item.title }}</span>
        </a>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import techs from '@/static/techs.json'
</script>
