<template>
  <div v-for="content in contents" class="content">
    <div class="title text-primary">
      {{ content.title[language] }}
      <div class="subtitle">
        {{ content.subtitle[language] }}
      </div>
    </div>
    <div class="text" v-if="content.text" v-html="content.text[language]"></div>
    <div class="text" v-if="content.code" v-html="content.code[language]"></div>
  </div>
  <div v-if="route.params.session === 'sobre'">
    <aboutcards></aboutcards>
  </div>
  <div class="content" v-if="route.params.session === 'laboratorio'">
    <laboratorioCards></laboratorioCards>
  </div>
  <div class="content" v-if="route.params.session === 'pesquisador'">
    <pesquisadorCards></pesquisadorCards>
  </div>
  <div class="content" v-if="route.params.session === 'evento'">
    <newsCards></newsCards>
  </div>
  <footerLogos></footerLogos>
</template>

<script setup lang="ts">
import pesquisadorCards from "../components/pesquisadorCards.vue";
import aboutcards from "../components/aboutCards.vue";
import laboratorioCards from "../components/laboratorioCards.vue";
import newsCards from "../components/newsCards.vue";
import footerLogos from "../components/footer.vue";

import { computed } from "vue";
import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useContentStore();

const { language, items } = storeToRefs(store);

const contents = computed(() => {
  return items.value
    .filter((c: any) => c.session === route.params.session)
    .sort((a: any, b: any) => a.order - b.order);
});
</script>

<style lang="scss">
.content {
  margin: 20px 0 40px 0;
  ul {
    margin-left: 20px;
  }
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    .subtitle {
      font-size: 18px;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .text {
    p,
    h3,
    h4 {
      margin: 20px 0;
    }
    li {
      p {
        margin: 0;
      }
    }
  }
}
</style>
