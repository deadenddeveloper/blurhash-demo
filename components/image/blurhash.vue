<template>
  <div
    :style="`width:${image.width}px;aspect-ratio:${image.width}/${image.height}`"
    class="relative inline-block mb-8 max-w-full"
  >
    <transition name="fade">
      <img
        v-show="blurhashImage && !loaded"
        v-intersection-observer="loadImage"
        :src="blurhashImage"
        :alt="image.name"
        :width="image.width"
        :height="image.height"
        class="absolute t-0 l-0"
      />
    </transition>
    <transition name="fade">
      <img
        v-show="loaded"
        :src="actualSrc"
        :alt="image.name"
        :width="image.width"
        :height="image.height"
        class="absolute t-0 l-0"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'
import { blurhashToBase64 } from '@/utils/image'

const props = defineProps<{
  image: TImage
}>()

const inited = ref(false)
const loaded = ref(false)
const actualSrc = ref('')
const blurhashImage = ref('')

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

onMounted(() => {
  blurhashImage.value = blurhashToBase64(
    props.image.blurhash,
    30,
    Math.floor((props.image.height * 30) / props.image.width)
  )
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
