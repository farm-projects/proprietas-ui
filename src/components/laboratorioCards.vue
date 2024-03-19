<template>
  <div class="laboratorios">
    <v-card
      v-for="card in cardsLaboratorios.sort(
        (a: any, b: any) => a.order - b.order
      )"
      class="card-laboratorio"
      :style="`border-left: 6px solid #006eb7; width: ${cardWidth};`"
    >
      <div
        v-if="card.image && card.image.length > 0"
        class="card-laboratorio-image"
      >
        <img
          :src="`https://cloud.squidex.io/api/assets/proprietas/${card.image[0]}`"
        />
      </div>
      <v-card-title style="white-space: unset; line-height: 26px">
        <div v-html="card.title"></div>
      </v-card-title>
      <v-card-subtitle
        style="white-space: unset; line-height: 22px"
        v-html="`${translations.coordination[language]}: ${card.responsible}`"
      >
      </v-card-subtitle>
      <v-card-text v-if="card.address || card.description[language]">
        <div
          class="card-laboratorio-description"
          v-html="card.description[language]"
        ></div>
        <p
          v-if="card.address"
          style="
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #ccc;
          "
        >
          {{ card.address }}
        </p>
      </v-card-text>

      <v-card-actions v-if="card.phone || card.site || card.email">
        <v-btn
          v-if="card.phone"
          prepend-icon="phone"
          size="small"
          :href="`tel:${card.phone}`"
        >
          {{ card.phone }}
        </v-btn>
        <v-btn
          v-if="card.site"
          prepend-icon="link"
          size="small"
          :href="card.site"
          target="_blank"
        >
          Site
        </v-btn>
        <v-btn
          v-if="card.email"
          prepend-icon="mail"
          size="small"
          :href="`mailto:${card.email}`"
        >
          Email
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";
import { computed } from "vue";
const store = useContentStore();
const { language, translations, cardsLaboratorios } = storeToRefs(store);
const { mobile } = useDisplay();

const cardWidth = computed(() => (mobile.value ? "100%" : "800px"));
</script>

<style lang="scss">
.laboratorios {
  display: flex;
  flex-direction: column;
  gap: 40px;
  .card-laboratorio {
    .card-laboratorio-image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-height: 300px;
      }
    }
    .card-laboratorio-description {
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
    .v-card-text {
      font-size: 16px !important;
      .subtitle {
        margin: 10px 0;
        font-weight: 500;
        text-decoration: underline;
      }
    }
  }
}
</style>
