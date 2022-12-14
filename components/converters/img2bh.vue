<template>
  <ui-text class="text-center">
    <ui-btn @click="upload">
      <client-only>
        <fa-icon :icon="['fas', 'upload']" />
      </client-only>
      <span>Upload image</span>
    </ui-btn>

    <img v-if="image" :src="image" />

    <input type="text" v-model="blurhash" placeholder="Blurhash" readonly />
  </ui-text>

  <input type="file" class="hidden" ref="input" accept="image/*" @change="change" />
</template>

<script setup lang="ts">
import { base64ToBlurhash } from '@/utils/image';

const image = ref('')
const blurhash = ref('')
const input = ref<HTMLInputElement>()

const upload = () => input.value?.click()

const change = (e: any) => {
  blurhash.value = 'calculating...'

  if ( input.value?.files && input.value.files[0] ) {
    const reader = new FileReader();

    reader.onload = async (e: any) => {
      image.value = e.target.result
      blurhash.value = await base64ToBlurhash(image.value)
    }

    reader.readAsDataURL(input.value.files[0]);
  }
}
</script>
