<template>
  <div
      v-for="way in ways"
      :key="way.title"
      class="!mb-16 space-y-8"
  >
    <ui-heading component="h2">{{ way.title }}</ui-heading>

    <ui-text class="text-center indent-0">{{ way.descr }}</ui-text>

    <div class="flex items-center justify-center space-x-4">
      <client-only>
        <div class="border border-dashed border-black w-96 text-center" v-html="way.before"></div>
      </client-only>
      <div>
        <client-only>
          <fa-icon :icon="['fas', 'chevron-right']" />
        </client-only>
      </div>
      <div class="border border-dashed border-black w-96 text-center">
        <img src="/img/sample_orig.png" alt="After" />
      </div>
    </div>

    <div class="w-full lg:w-2/3 mx-auto grid md:grid-cols-2 text-center">
      <div>
        <div class="text-xl">Pros</div>
        <div
            v-for="pro in way.pros"
            :key="pro"
            class="space-x-2"
        >
          <client-only>
            <fa-icon class="text-green-500" :icon="['fas', 'plus-circle']" />
          </client-only>
          <span>{{ pro }}</span>
        </div>
      </div>

      <div>
        <div class="text-xl">Contras</div>
        <div
            v-for="contra in way.contras"
            :key="contra"
            class="space-x-2"
        >
          <client-only>
            <fa-icon class="text-red-500" :icon="['fas', 'minus-circle']" />
          </client-only>
          <span>{{ contra }}</span>
        </div>
      </div>
    </div>

    <div class="text-center">
      <NuxtLink :to="way.link" class="bg-blue-800 text-white py-2 px-4 space-x-2 rounded-xl shadow hover:bg-blue-900 transition">See demo</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import ways from '@/static/ways.json'
</script>
