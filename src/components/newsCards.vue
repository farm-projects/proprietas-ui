<template>
  <div style="display: flex; flex-direction: column; gap: 40px">
    <card
      v-for="card in cardsNoticias.sort(
        (a: any, b: any) =>
          new Date(b.refDate).getTime() - new Date(a.refDate).getTime()
      )"
      :data="card"
      :width="cardWidth"
    ></card>
  </div>
</template>

<script setup lang="ts">
import card from "./newsCard.vue";

import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";
import { computed } from "vue";

const store = useContentStore();
const { language, translations, cardsNoticias } = storeToRefs(store);
const { mobile } = useDisplay();

const cardWidth = computed(() => (mobile.value ? "100%" : "800px"));
</script>
