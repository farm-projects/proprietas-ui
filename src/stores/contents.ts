import { ref } from "vue";
import { defineStore } from "pinia";
import { SquidexClient } from "@squidex/squidex";

const client = new SquidexClient({
  appName: "proprietas",
  clientId: import.meta.env.VITE_CLIENT_ID || "invalid",
  clientSecret: import.meta.env.VITE_CLIENT_SECRET || "invalid",
  environment: "https://cloud.squidex.io/",
});

export const useContentStore = defineStore("contents", () => {
  const language = ref("pt");
  const items = ref([] as any);
  const cardsAreaTematica = ref([] as any);
  const cardsPesquisadores = ref([] as any);
  const cardsLaboratorios = ref([] as any);
  const cardsNoticias = ref([] as any);
  const translations = ref({
    coordination: {
      pt: "Cordenação",
      en: "Coordination",
      fr: "Coordination",
    },
    more: {
      pt: "Veja mais",
      en: "See more",
      fr: "Voir plus",
    },
    close: {
      pt: "Fechar",
      en: "Close",
      fr: "Fermer",
    },
  } as any);
  const tipoPesquisador = ref([
    {
      code: "Pesquisador Fundador",
      plural: {
        pt: "Pesquisadores Fundadores",
        en: "Pesquisadores Fundadores",
        fr: "Pesquisadores Fundadores",
      },
      sigle: {
        pt: "Pesquisador Fundador",
        en: "Pesquisador Fundador",
        fr: "Pesquisador Fundador",
      },
    },
    {
      code: "Pesquisador Associado",
      plural: {
        pt: "Pesquisadores Associados",
        en: "Pesquisadores Associados",
        fr: "Pesquisadores Associados",
      },
      sigle: {
        pt: "Pesquisador Associado",
        en: "Pesquisador Associado",
        fr: "Pesquisador Associado",
      },
    },
    {
      code: "Pesquisador Consultor",
      plural: {
        pt: "Pesquisadores Consultores",
        en: "Pesquisadores Consultores",
        fr: "Pesquisadores Consultores",
      },
      sigle: {
        pt: "Pesquisador Consultor",
        en: "Pesquisador Consultor",
        fr: "Pesquisador Consultor",
      },
    },
    {
      code: "Pesquisadora Fundadora",
      plural: {
        pt: "Pesquisadoras Fundadoras",
        en: "Pesquisadoras Fundadoras",
        fr: "Pesquisadoras Fundadoras",
      },
      sigle: {
        pt: "Pesquisadora Fundadora",
        en: "Pesquisadora Fundadora",
        fr: "Pesquisadora Fundadora",
      },
    },
    {
      code: "Pesquisadora Associada",
      plural: {
        pt: "Pesquisadores Associadas",
        en: "Pesquisadores Associadas",
        fr: "Pesquisadores Associadas",
      },
      sigle: {
        pt: "Pesquisadora Associada",
        en: "Pesquisadora Associada",
        fr: "Pesquisadora Associada",
      },
    },
    {
      code: "Pesquisadora Consultora",
      plural: {
        pt: "Pesquisadoras Consultoras",
        en: "Pesquisadoras Consultoras",
        fr: "Pesquisadoras Consultoras",
      },
      sigle: {
        pt: "Pesquisadora Consultora",
        en: "Pesquisadora Consultora",
        fr: "Pesquisadora Consultora",
      },
    },
  ] as any);
  const temas = ref([
    {
      code: "POLÍTICAS PÚBLICAS",
      label: {
        pt: "DESENVOLVIMENTO E POLÍTICAS PÚBLICAS",
        en: "DESENVOLVIMENTO E POLÍTICAS PÚBLICAS",
        fr: "DESENVOLVIMENTO E POLÍTICAS PÚBLICAS",
      },
      color: "#3792e5",
    },
    {
      code: "CULTURA",
      label: {
        pt: "CULTURA, ARTES E DIREITOS:<br>ENTRE A PROTEÇÃO E O ACESSO",
        en: "CULTURA, ARTES E DIREITOS:<br>ENTRE A PROTEÇÃO E O ACESSO",
        fr: "CULTURA, ARTES E DIREITOS:<br>ENTRE A PROTEÇÃO E O ACESSO",
      },
      color: "#25b60d",
    },
    {
      code: "PATRIMÔNIO",
      label: {
        pt: "TERRA, RIQUEZA E PATRIMÔNIO",
        en: "TERRA, RIQUEZA E PATRIMÔNIO",
        fr: "TERRA, RIQUEZA E PATRIMÔNIO",
      },
      color: "#e53737",
    },
  ]);
  async function loadContents() {
    try {
      // load contents
      let response = await client.contents.getContents("content");
      items.value = [];
      for (const item of response.items) {
        const content = JSON.parse(JSON.stringify(item.data));
        content.session = content.session?.iv;
        content.order = content.order?.iv;
        items.value.push(content);
      }
      // load cardAreaTematica
      response = await client.contents.getContents("card-area-tematica");
      cardsAreaTematica.value = [];
      for (const item of response.items) {
        const card = JSON.parse(JSON.stringify(item.data));
        card.tema = card.tema?.iv;
        card.order = card.order?.iv;
        cardsAreaTematica.value.push(card);
      }
      // load cardsPesquisadores
      response = await client.contents.getContents("card-pesquisador");
      cardsPesquisadores.value = [];
      for (const item of response.items) {
        const card = JSON.parse(JSON.stringify(item.data));
        card.nome = card.nome?.iv;
        card.linkedin = card.linkedin?.iv;
        card.facebook = card.facebook?.iv;
        card.instagram = card.instagram?.iv;
        card.twitter = card.twitter?.iv;
        card.email = card.email?.iv;
        card.lattes = card.lattes?.iv;
        card.tipo = card.tipo?.iv;
        card.tema = card.tema?.iv;
        card.order = card.order?.iv;
        card.image = card.image?.iv;
        cardsPesquisadores.value.push(card);
      }
      // load cardsLaboratorios
      response = await client.contents.getContents("card-laboratorio");
      cardsLaboratorios.value = [];
      for (const item of response.items) {
        const card = JSON.parse(JSON.stringify(item.data));
        card.title = card.title?.iv;
        card.responsible = card.responsible?.iv;
        card.order = card.order?.iv;
        card.address = card.address?.iv;
        card.email = card.email?.iv;
        card.phone = card.phone?.iv;
        card.site = card.site?.iv;
        cardsLaboratorios.value.push(card);
      }
      // load cardsNoticias
      response = await client.contents.getContents("card-noticia");
      cardsNoticias.value = [];
      for (const item of response.items) {
        const card = JSON.parse(JSON.stringify(item.data));
        card.refDate = card.refDate?.iv;
        card.tipo = card.tipo?.iv;
        card.link = card.link?.iv;
        card.image = card.image?.iv;
        cardsNoticias.value.push(card);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return {
    temas,
    items,
    cardsAreaTematica,
    cardsPesquisadores,
    cardsLaboratorios,
    cardsNoticias,
    tipoPesquisador,
    language,
    translations,
    loadContents,
  };
});
