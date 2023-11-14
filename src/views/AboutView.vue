<template>
  <div class="about">
    <h1>{{ about.title.iv }}</h1>
    <div v-html="about.content.iv"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useContentStore } from '../stores/contents'
import { storeToRefs } from 'pinia'

const contents = useContentStore()

const { aboutContent } = storeToRefs(contents)

const about = computed(() => aboutContent.value)

onMounted(() => {
  contents.loadAboutContent()
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
