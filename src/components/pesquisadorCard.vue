<template>
  <v-card
    class="pesquisador"
    :style="`border-left: 6px solid ${tema.color}; width: ${width};`"
  >
    <template v-slot:title>
      <div v-html="data.nome"></div>
    </template>
    <template v-slot:subtitle>
      <div class="pesquisador-tipo">{{ tipo.sigle[language] }}</div>
    </template>
    <template v-slot:prepend>
      <v-avatar size="80">
        <v-img
          v-if="data.image"
          :src="`https://cloud.squidex.io/api/assets/proprietas/${data.image}`"
          :alt="data.nome"
        ></v-img>
        <v-icon v-else icon="md:person" :size="80" color="#ccc"></v-icon>
      </v-avatar>
    </template>
    <v-card-text style="height: 80px">
      <div v-html="tema.label[language]"></div>
      <div style="display: flex; gap: 5px; margin-top: 10px">
        <v-chip
          v-for="tag in tags"
          :color="tema.color"
          rounded="6"
          :size="mobile ? 'small' : 'default'"
        >
          {{ tag }}
        </v-chip>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-if="data.email"
        prepend-icon="mail"
        size="small"
        :href="`mailto:${data.email}`"
        target="_blank"
      >
        E-mail
      </v-btn>
      <v-btn
        v-if="data.lattes"
        :href="data.lattes"
        prepend-icon="link"
        size="small"
        target="_blank"
      >
        Lattes
      </v-btn>
      <v-btn
        v-if="data.facebook"
        :href="data.facebook"
        prepend-icon="link"
        size="small"
        target="_blank"
      >
        Fabebook
      </v-btn>
      <v-btn
        v-if="data.instagram"
        :href="data.instagram"
        prepend-icon="link"
        size="small"
        target="_blank"
      >
        Instagram
      </v-btn>
      <v-btn
        v-if="data.twitter"
        :href="data.twitter"
        prepend-icon="link"
        size="small"
        target="_blank"
      >
        Twitter
      </v-btn>
      <v-btn
        v-if="data.linkedin"
        :href="data.linkedin"
        prepend-icon="link"
        size="small"
        target="_blank"
      >
        LinkedIn
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object as any,
  tipo: String,
  width: String,
  mobile: Boolean,
});

import { computed } from "vue";
import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";
const store = useContentStore();
const { temas, tipoPesquisador, language } = storeToRefs(store);

const tema = computed(
  () => temas.value?.find((t: any) => t.code === props.data.tema) || ({} as any)
);

const tipo = computed(
  () =>
    tipoPesquisador.value?.find((p: any) => p.code === props.tipo) ||
    ({} as any)
);

const tags = computed(() => {
  return props.data.tags && props.data.tags[language.value]
    ? props.data.tags[language.value].split(";")
    : [];
});
</script>

<style lang="scss">
.pesquisador {
  .v-card-title {
    white-space: unset;
    line-height: 22px !important;
  }
  .v-card-subtitle {
    white-space: unset;
  }
  .v-card-actions {
    margin-top: -15px;
  }
  .pesquisador-tipo {
    margin-top: 2px;
  }
  .pesquisador-tema {
    height: 40px;
    font-size: 14px;
    margin: 10px 0;
    line-height: 22px;
  }
}
</style>
