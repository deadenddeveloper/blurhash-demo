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

const inited = ref(false)
const actualSrc = ref(props.src || '')

const loadImage = ([{ isIntersecting }]: [{ isIntersecting: boolean }]) => {
  if (isIntersecting && !inited.value) {
    inited.value = true
    const img = new Image()
    const src = `/img/demo/${props.image.name}?${new Date().getTime()}`
    img.src = src
    img.onload = () => {
      actualSrc.value = src
    }
  }
}
</script>
