<template>
  <component :is="component" :class="classList"><slot /></component>
</template>

<script setup lang="ts">
const props = defineProps({
  component: {
    type: String,
    default: 'h1',
    validator(value: string) {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    }
  }
})

const classMap = <Record<string, string>>{
  'h1': 'text-center text-3xl',
  'h2': 'text-center text-2xl',
  'h3': 'text-center text-xl',
  'h4': 'text-center text-xl',
  'h5': 'text-center text-xl',
  'h6': 'text-center text-xl',
}

const classList = computed(() => classMap[props.component])
</script>
