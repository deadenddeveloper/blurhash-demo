<template>
  <ui-text>
    <div v-for="link in links" :key="link.link">
      <a :href="link.link" target="_blank" class="space-x-2">
        <client-only>
          <fa-icon :icon="link.icon" />
        </client-only>
        <span>{{ link.title }}</span>
      </a>
    </div>
  </ui-text>
</template>

<script setup lang="ts">
import links from '@/static/links.json'
</script>
