<template>
  <img
      :src="actualSrc"
      v-intersection-observer="loadImage"
      :width="image.width"
      :height="image.height"
  />
</template>

<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'

const props = defineProps<{
  src: '',
  image: TImage,
}>()

const loaded = ref(false)
const actualSrc = ref(props.src || '')

const loadImage = ([{ isIntersecting }]: [{ isIntersecting: boolean }]) => {
  if (isIntersecting && !loaded.value) {
    loaded.value = true
    actualSrc.value = `/img/demo/${props.image.name}?${new Date().getTime()}`
  }
}
</script>
