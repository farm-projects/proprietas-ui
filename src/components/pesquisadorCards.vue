<template>
  <div class="pesquisadores">
    <div class="title text-primary" style="line-height: 30px">
      {{
        tipoPesquisador.find((p: any) => p.code === "Pesquisador Fundador")
          ?.plural[language]
      }}
    </div>
    <div
      :style="`display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fill, ${cardWidth});`"
    >
      <pesquisador
        v-for="card in cardsPesquisadores
          .filter(
            (c: any) =>
              c.tipo === 'Pesquisador Fundador' ||
              c.tipo === 'Pesquisadora Fundadora'
          )
          .sort((a: any, b: any) => a.order - b.order)"
        :data="card"
        :tipo="card.tipo"
        :width="cardWidth"
        :mobile="mobile"
        :tag-size="cardTagSize"
      ></pesquisador>
    </div>
  </div>
  <div class="pesquisadores">
    <div class="title text-primary" style="line-height: 30px">
      {{
        tipoPesquisador.find((p: any) => p.code === "Pesquisador Associado")
          ?.plural[language]
      }}
    </div>
    <div
      :style="`display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fill, ${cardWidth});`"
    >
      <pesquisador
        v-for="card in cardsPesquisadores
          .filter(
            (c: any) =>
              c.tipo === 'Pesquisador Associado' ||
              c.tipo === 'Pesquisadora Associada'
          )
          .sort((a: any, b: any) => a.order - b.order)"
        :data="card"
        :tipo="card.tipo"
        :width="cardWidth"
        :mobile="mobile"
        :tag-size="cardTagSize"
      ></pesquisador>
    </div>
  </div>
  <div class="pesquisadores">
    <div class="title text-primary" style="line-height: 30px">
      {{
        tipoPesquisador.find((p: any) => p.code === "Pesquisador Consultor")
          ?.plural[language]
      }}
    </div>
    <div
      :style="`display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fill, ${cardWidth});`"
    >
      <pesquisador
        v-for="card in cardsPesquisadores
          .filter(
            (c: any) =>
              c.tipo === 'Pesquisador Consultor' ||
              c.tipo === 'Pesquisadora Consultora'
          )
          .sort((a: any, b: any) => a.order - b.order)"
        :data="card"
        :tipo="card.tipo"
        :width="cardWidth"
        :mobile="mobile"
        :tag-size="cardTagSize"
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

const cardWidth = computed(() => (mobile.value ? "100%" : "415px"));

const cardTagSize = computed(() => (mobile.value ? "small" : "default"));

const store = useContentStore();
const { language, cardsPesquisadores, tipoPesquisador } = storeToRefs(store);
</script>

<style lang="scss">
.pesquisadores {
  margin: 20px 0 60px 0;
}
</style>
