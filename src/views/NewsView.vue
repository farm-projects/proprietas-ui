<template>
  <div class="content">
    <div class="title text-primary">{{ content.title[language] }}</div>
    <noticia :data="news" :width="cardWidth" :open="true" />
  </div>
</template>

<script setup lang="ts">
import noticia from "../components/newsCard.vue";

import { computed } from "vue";
import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const cardWidth = computed(() => (mobile.value ? "100%" : "800px"));
const route = useRoute();
const store = useContentStore();

const { language, items, cardsNoticias } = storeToRefs(store);

const content = computed(() => {
  return items.value.find((c: any) => c.session === route.params.session);
});

const news = computed(() => {
  return cardsNoticias.value.find((c: any) => c.id === route.params.id);
});
</script>
