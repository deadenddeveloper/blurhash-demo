<template>
  <div class="flex justify-around">
    <div v-for="item in techs" key="item.link">
      <a :href="item.link" target="_blank" class="flex flex-col space-y-2 justify-between items-center">
        <fa-icon :icon="item.icon" />
        <span class="text-sm">{{ item.subtitle }}</span>
        <span class="text-xl">{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import techs from '@/static/techs.json'
</script>
