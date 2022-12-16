<template>
  <div
      v-show="!loaded"
      v-intersection-observer="loadImage"
      :style="`width:${image.width}px;background-color:${image.color};aspect-ratio:${image.width}/${image.height}`"
      class="max-w-full inline-block mb-8"
  ></div>
  <img
      v-show="loaded"
      :src="actualSrc"
      :alt="image.name"
      :width="image.width"
      :height="image.height"
      class="inline-block mb-8"
  />
</template>

<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'

const props = defineProps<{
  image: TImage,
}>()

const inited = ref(false)
const loaded = ref(false)
const actualSrc = ref('')

const loadImage = ([{ isIntersecting }]: [{ isIntersecting: boolean }]) => {
  if (isIntersecting && !inited.value) {
    inited.value = true
    const img = new Image()
    const src = `/img/demo/${props.image.name}?${new Date().getTime()}`
    img.src = src
    img.onload = () => {
      loaded.value = true
      actualSrc.value = src
    }
  }
}
</script>
