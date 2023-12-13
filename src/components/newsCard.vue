<template>
  <v-card class="card-noticia" :width="width">
    <v-img
      v-if="data.image && data.image.length > 0"
      :src="`https://cloud.squidex.io/api/assets/proprietas/${data.image[0]}`"
      cover
    ></v-img>
    <v-card-title
      style="white-space: unset; line-height: 26px"
      v-html="data.title[language]"
    >
    </v-card-title>
    <v-card-subtitle
      v-if="data.subtitle[language]"
      style="white-space: unset; line-height: 22px"
      v-html="data.subtitle[language]"
    >
    </v-card-subtitle>
    <v-card-actions>
      <div
        style="
          font-weight: 500;
          font-size: 16px;
          color: #006eb7;
          margin: 8px 0 0 8px;
        "
      >
        {{ refDate }}
      </div>
      <v-spacer></v-spacer>
      <v-btn
        v-if="data.link"
        prepend-icon="link"
        :href="data.link"
        target="_blank"
      >
        Link
      </v-btn>
      <v-btn
        v-if="data.description[language]"
        :prepend-icon="show ? 'expand_less' : 'expand_more'"
        variant="text"
        @click="show = !show"
        >{{
          !show ? translations.more[language] : translations.close[language]
        }}</v-btn
      >
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text
          class="card-noticia-description"
          v-html="data.description[language]"
        >
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";

const store = useContentStore();
const { language, translations } = storeToRefs(store);

const props = defineProps({
  data: Object as any,
  width: String,
});

const show = ref(false);

const refDate = computed(() => {
  const dt = new Date(props.data.refDate);
  return dt.toLocaleDateString(language.value);
});
</script>

<style lang="scss">
.card-noticia {
  a {
    color: rgba(var(--v-theme-primary-darken-1));
  }
  .card-noticia-description {
    p {
      margin: 10px 0;
    }
  }
  .v-card-title {
    font-size: 20px !important;
    white-space: unset;
    line-height: 26px;
    font-weight: bold;
  }
  .v-card-subtitle {
    font-size: 16px !important;
  }
  .v-card-text {
    font-size: 16px !important;
    .subtitle {
      margin: 10px 0;
      font-weight: 500;
      text-decoration: underline;
    }
  }
}
</style>
