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
    <div
      style="display: flex; flex-direction: column; gap: 20px"
      v-if="route.params.session === 'evento'"
    >
      <div>
        <v-card width="800">
          <v-img
            src="https://images.ctfassets.net/kpmk8wktzj4t/4Qq7qGAUYuAizgHMZL4WtI/eb3f889491f5e63f4017cbdac32c3a62/BONY_Carousel_1980x640_4.jpg?fit=scale&w=1800"
            height="200px"
            cover
          ></v-img>
          <v-card-title style="white-space: unset; line-height: 26px"
            >Título da Notícia
          </v-card-title>
          <v-card-subtitle style="white-space: unset; line-height: 22px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            nulla ante. Pellentesque scelerisque pulvinar neque in feugiat.
          </v-card-subtitle>
          <v-card-actions>
            <div
              style="
                font-weight: 500;
                font-size: 14px;
                color: #006eb7;
                margin: 8px 0 0 8px;
              "
            >
              10/06/2023
            </div>
            <v-spacer></v-spacer>
            <v-btn prepend-icon="link"> Link </v-btn>
            <v-btn variant="text" @click="show = !show">{{
              !show ? "Ver mais" : "Fechar"
            }}</v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 20px"
      v-if="route.params.session === 'laboratorio'"
    >
      <div>
        <v-card
          width="600"
          title="NÚCLEO DE HISTÓRIA RURAL (UFF)"
          subtitle="Coordenação: Marcia Motta"
          style="border-left: 6px solid #006eb7"
        >
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae nulla ante. Pellentesque scelerisque pulvinar neque in
              feugiat. Integer non nunc lacus. Aenean faucibus, risus eget
              tincidunt suscipit, felis risus accumsan tellus, in ullamcorper
              massa arcu quis lectus. Donec porttitor sapien in purus venenatis
              iaculis. Maecenas placerat sagittis nulla vitae semper. Donec a
              massa sagittis, placerat purus a, lobortis metus.
            </p>
            <p
              style="
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid #ccc;
              "
            >
              Av. Athos da Silveira Ramos, 274 - Edifício do Centro de Ciências
              Matemáticas e da Natureza - Bloco D - Cidade Universitária - Rio
              de Janeiro - RJ - CEP: 21941-916.
            </p>
          </v-card-text>

          <v-card-actions>
            <v-btn prepend-icon="phone" size="small"> 21 97652-0822 </v-btn>
            <v-btn prepend-icon="mail" size="small"> Email </v-btn>
            <v-btn prepend-icon="link" size="small"> Site </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div>
        <v-card width="600" style="border-left: 6px solid #006eb7">
          <v-card-title style="white-space: unset; line-height: 26px">
            NÚCLEO DE PESQUISA EM DIREITOS FUNDAMENTAIS, RELAÇÕES PRIVADAS E
            POLÍTICAS (UFRRJ)
          </v-card-title>
          <v-card-subtitle> Coordenação: Allan Rocha de Souza </v-card-subtitle>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae nulla ante. Pellentesque scelerisque pulvinar neque in
              feugiat.
            </p>
          </v-card-text>

          <v-card-actions>
            <v-btn prepend-icon="phone" size="small"> 21 97652-0822 </v-btn>
            <v-btn prepend-icon="mail" size="small"> Email </v-btn>
            <v-btn prepend-icon="link" size="small"> Site </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
  <div v-if="route.params.session === 'sobre'">
    <aboutcards></aboutcards>
  </div>
  <div class="content" v-if="route.params.session === 'pesquisador'">
    <pesquisadorCards></pesquisadorCards>
  </div>
</template>

<script setup lang="ts">
import pesquisadorCards from "../components/pesquisadorCards.vue";
import aboutcards from "../components/aboutCards.vue";

import { computed, ref } from "vue";
import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useContentStore();

const { language, items } = storeToRefs(store);

const show = ref(false);

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
