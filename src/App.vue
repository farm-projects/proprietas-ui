<template>
  <v-app>
    <v-system-bar color="bluebackground">
      <v-spacer></v-spacer>
      <v-btn
        style="font-weight: 600"
        variant="text"
        :color="language === 'pt' ? 'accent' : 'white'"
        @click="store.setLanguage('pt')"
        >PT</v-btn
      >
      <v-btn
        style="font-weight: 600"
        variant="text"
        :color="language === 'es' ? 'accent' : 'white'"
        @click="store.setLanguage('es')"
        >ES</v-btn
      >
      <v-btn
        style="font-weight: 600"
        variant="text"
        :color="language === 'en' ? 'accent' : 'white'"
        @click="store.setLanguage('en')"
        >EN</v-btn
      >
      <v-btn
        style="font-weight: 600"
        variant="text"
        :color="language === 'fr' ? 'accent' : 'white'"
        @click="store.setLanguage('fr')"
        >FR</v-btn
      >
    </v-system-bar>
    <v-app-bar color="grey-lighten-4" flat :height="mobile ? 70 : 90">
      <template v-if="mobile" v-slot:append>
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props" icon>
              <v-icon icon="menu" size="38px"></v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in links"
              :key="i"
              link
              :to="item.to"
              :active="route.params.session === item.id"
            >
              <v-list-item-title>{{ item.title[language] }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <v-container v-if="mobile" class="mx-auto d-flex align-center">
        <router-link to="/">
          <img src="./assets/img/logo.svg" style="height: 45px" />
        </router-link>
      </v-container>
      <v-container
        fluid
        v-else
        class="mx-auto d-flex align-center justify-center"
      >
        <router-link to="/">
          <img src="./assets/img/logo.svg" />
        </router-link>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          class="me-2"
          height="40"
          variant="flat"
          icon="home"
          to="/"
        ></v-btn>
        <v-btn
          v-for="item in links"
          color="primary"
          class="me-2"
          height="40"
          variant="flat"
          :to="item.to"
          >{{ item.title[language] }}</v-btn
        >
      </v-container>
    </v-app-bar>
    <v-footer
      app
      color="grey"
      height="44"
      style="display: flex; justify-content: center"
    >
      <div style="display: flex; justify-content: center; align-items: center">
        <div>© 2012-2024 Proprietas</div>
      </div>
    </v-footer>
    <v-main>
      <v-container fluid>
        <RouterView v-if="!loading" />
      </v-container>
    </v-main>
    <v-overlay v-if="loading" class="align-center justify-center">
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import { useContentStore } from "./stores/contents";
import { useDisplay } from "vuetify";
import { storeToRefs } from "pinia";

const { mobile } = useDisplay();

const store = useContentStore();
const { language } = storeToRefs(store);

const loading = ref(true);
const route = useRoute();

const links = [
  {
    id: "pesquisador",
    title: {
      pt: "Pesquisadores",
      en: "Researchers",
      es: "Investigadores",
      fr: "Des chercheurs",
    },
    to: "/pesquisador",
  },
  {
    id: "laboratorio",
    title: {
      pt: "Laboratórios",
      en: "Laboratories",
      es: "Laboratories",
      fr: "Laboratoires",
    },
    to: "/laboratorio",
  },
  {
    id: "evento",
    title: {
      pt: "Notícias",
      en: "News",
      es: "Noticias",
      fr: "Nouvelles",
    },
    to: "/evento",
  },
  {
    id: "equipe",
    title: {
      pt: "Coordenação",
      es: "Coordinación",
      en: "Coordination",
      fr: "Coordination",
    },
    to: "/equipe",
  },
  {
    id: "contato",
    title: {
      pt: "Contato",
      en: "Contact",
      es: "Contacto",
      fr: "Contact",
    },
    to: "/contato",
  },
] as any;

onMounted(() => {
  store
    .loadContents()
    .then(() => {
      loading.value = false;
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
    });
});
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
}
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #a1a1a1 #ebebeb;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #ebebeb;
}

*::-webkit-scrollbar-thumb {
  background-color: #a1a1a1;
  border-radius: 10px;
  border: 3px solid #ebebeb;
}
.v-card-title {
  hyphens: manual !important;
}
</style>
