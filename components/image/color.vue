<template>
  <div
      v-if="!loaded"
      v-intersection-observer="loadImage"
      :style="`width:${image.width}px;height:${image.height}px;background-color:${image.color};`"
      class="inline-block"
  ></div>
  <img
      v-if="loaded"
      :src="`/img/demo/${image.name}?${new Date().getTime()}`"
      :alt="image.name"
      :width="image.width"
      :height="image.height"
      class="inline-block"
  />
</template>

<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'

const props = defineProps<{
  image: TImage,
}>()

const loaded = ref(false)

const loadImage = ([{ isIntersecting }]: [{ isIntersecting: boolean }]) => {
  if (isIntersecting && !loaded.value) {
    loaded.value = true
  }
}
</script>
