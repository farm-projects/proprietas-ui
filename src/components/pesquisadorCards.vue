<template>
  <div class="pesquisadores" v-for="tipo in tipoPesquisador as any">
    <div class="title text-primary">{{ tipo.plural[language] }}</div>
    <div
      :style="`display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fill, ${cardWidth});`"
    >
      <pesquisador
        v-for="card in cardsPesquisadores
          .filter((c: any) => c.tipo === tipo.code)
          .sort((a: any, b: any) => a.order - b.order)"
        :data="card"
        :tipo="tipo.code"
        :width="cardWidth"
      ></pesquisador>
    </div>
  </div>
</template>

<script setup lang="ts">
import pesquisador from "./pesquisadorCard.vue";

import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";
import { computed } from "vue";

const { mobile } = useDisplay();

const cardWidth = computed(() => (mobile.value ? "100%" : "420px"));

const store = useContentStore();
const { language, cardsPesquisadores, tipoPesquisador } = storeToRefs(store);
</script>

<style lang="scss">
.pesquisadores {
  margin: 20px 0 60px 0;
}
</style>
