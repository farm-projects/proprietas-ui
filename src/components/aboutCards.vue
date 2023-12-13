<template>
  <v-row>
    <v-col :cols="width > 1400 ? 4 : 12">
      <v-card style="border-top: 6px solid #3792e5" class="area-tematica">
        <v-card-title>
          {{
            (temas?.find((t: any) => t.code === "POLÍTICAS PÚBLICAS") as any)
              .label[language]
          }}
        </v-card-title>
        <v-card-text>
          <div
            class="sub-area-tematica"
            v-for="card in cardsAreaTematica
              ?.filter((c: any) => c.tema === 'POLÍTICAS PÚBLICAS')
              .sort((a: any, b: any) => a.order - b.order)"
          >
            <div class="subtitle">{{ card.title[language] }}</div>
            <div v-html="card.description[language]"></div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col :cols="width > 1400 ? 4 : 12">
      <v-card style="border-top: 6px solid #25b60d" class="area-tematica">
        <v-card-title>
          <div
            v-html="
              (temas?.find((t: any) => t.code === 'CULTURA') as any).label[
                language
              ]
            "
          ></div>
        </v-card-title>
        <v-card-text>
          <div
            class="sub-area-tematica"
            v-for="card in cardsAreaTematica
              ?.filter((c: any) => c.tema === 'CULTURA')
              .sort((a: any, b: any) => a.order - b.order)"
          >
            <div class="subtitle">{{ card.title[language] }}</div>
            <div v-html="card.description[language]"></div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col :cols="width > 1400 ? 4 : 12">
      <v-card style="border-top: 6px solid #e53737" class="area-tematica">
        <v-card-title>
          {{
            (temas?.find((t: any) => t.code === "PATRIMÔNIO") as any).label[
              language
            ]
          }}
        </v-card-title>
        <v-card-text>
          <div
            class="sub-area-tematica"
            v-for="card in cardsAreaTematica
              ?.filter((c: any) => c.tema === 'PATRIMÔNIO')
              .sort((a: any, b: any) => a.order - b.order)"
          >
            <div class="subtitle">{{ card.title[language] }}</div>
            <div v-html="card.description[language]"></div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";

const { width } = useDisplay();

const store = useContentStore();
const { temas, language, cardsAreaTematica } = storeToRefs(store);
</script>

<style lang="scss">
.area-tematica {
  .v-card-title {
    font-size: 20px !important;
    white-space: unset;
    font-weight: bold;
    line-height: 24px !important;
    height: 70px;
    display: flex;
    align-items: center;
  }
  .v-card-text {
    font-size: 16px !important;
    .subtitle {
      margin: 10px 0;
      font-weight: 500;
      text-decoration: underline;
    }
  }
  .sub-area-tematica:not(:first-child) {
    margin-top: 20px;
  }
}
</style>
