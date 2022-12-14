<template>
  <ui-text>
    <client-only>
      <div v-for="link in links" :key="link.link">
        <a :href="link.link" target="_blank" class="space-x-2">
          <fa-icon :icon="link.icon" />
          <span>{{ link.title }}</span>
        </a>
      </div>
    </client-only>
  </ui-text>
</template>

<script setup lang="ts">
import links from '@/static/links.json'
</script>
