<template>
  <div style="display: flex; flex-direction: column; gap: 40px">
    <noticia
      v-for="card in cardsNoticiasSorted"
      :data="card"
      :width="cardWidth"
    ></noticia>
  </div>
</template>

<script setup lang="ts">
import noticia from "./newsCard.vue";

import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";
import { computed } from "vue";

const { mobile } = useDisplay();

const cardWidth = computed(() => (mobile.value ? "100%" : "800px"));

const store = useContentStore();
const { cardsNoticias } = storeToRefs(store);

const cardsNoticiasSorted = computed(() => {
  if (!cardsNoticias.value) {
    return [];
  }
  return cardsNoticias.value.sort(
    (a: any, b: any) =>
      new Date(b.refDate).getTime() - new Date(a.refDate).getTime()
  );
});
</script>
