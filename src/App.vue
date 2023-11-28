<template>
  <v-app>
    <v-system-bar color="bluebackground">
      <v-spacer></v-spacer>
      <v-btn variant="text" color="white">PT</v-btn>
      <v-btn variant="text" color="white">EN</v-btn>
      <v-btn variant="text" color="white">FR</v-btn>
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
            <v-list-item v-for="(item, i) in links" :key="i" link :to="item.to">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <v-container v-if="mobile" class="mx-auto d-flex align-center">
        <router-link to="/">
          <img src="./assets/img/logo.svg" style="height: 50px" />
        </router-link>
      </v-container>
      <v-container
        v-else
        class="mx-auto d-flex align-center justify-center"
        style="min-width: 1330px"
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
          >{{ item.title }}</v-btn
        >
      </v-container>
    </v-app-bar>
    <v-footer app color="grey" height="44"></v-footer>
    <v-main>
      <v-container :style="mobile ? '' : 'min-width: 1330px'">
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
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import { useContentStore } from "./stores/contents";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const contents = useContentStore();
const loading = ref(true);

const links = [
  {
    title: "Sobre",
    to: "/sobre",
  },
  {
    title: "Pesquisadores",
    to: "/pesquisador",
  },
  {
    title: "Equipe",
    to: "/equipe",
  },
  {
    title: "Laboratórios",
    to: "/laboratorio",
  },
  {
    title: "Noticias",
    to: "/evento",
  },
  {
    title: "Contato",
    to: "/contato",
  },
];

onMounted(() => {
  contents
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
</style>
