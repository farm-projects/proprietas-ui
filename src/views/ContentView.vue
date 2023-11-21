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
    <div class="cards" v-if="route.params.session === 'pesquisador'">
      <div>
        <v-card
          width="344"
          title="Marcia Motta"
          subtitle="Pesquisador Fundador"
          style="border-left: 6px solid #e53737"
        >
          <template v-slot:prepend>
            <v-avatar size="42">
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.png"
                alt="Allan Dutra"
              ></v-img>
            </v-avatar>
          </template>
          <v-card-text style="height: 35px">
            Terra, Riqueza e Patrimônio.
          </v-card-text>
          <v-card-actions>
            <v-btn prepend-icon="mail" size="small"> Email </v-btn>
            <v-btn prepend-icon="link" size="small"> LinkedIn </v-btn>
            <v-btn prepend-icon="link" size="small"> Lattes </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div>
        <v-card
          width="344"
          title="Allan Dutra"
          subtitle="Pesquisador Associado"
          style="border-left: 6px solid #25b60d"
        >
          <template v-slot:prepend>
            <v-avatar size="42">
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.png"
                alt="Allan Dutra"
              ></v-img>
            </v-avatar>
          </template>
          <v-card-text style="height: 35px">
            Cultura, Artes e Direitos: Entre a proteção e o acesso.
          </v-card-text>
          <v-card-actions>
            <v-btn prepend-icon="mail" size="small"> Email </v-btn>
            <v-btn prepend-icon="link" size="small"> LinkedIn </v-btn>
            <v-btn prepend-icon="link" size="small"> Lattes </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div>
        <v-card
          width="344"
          title="Ana Célia de Castro"
          subtitle="Pesquisador Consultor"
          style="border-left: 6px solid #3792e5"
        >
          <template v-slot:prepend>
            <v-avatar size="42">
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.png"
                alt="Allan Dutra"
              ></v-img>
            </v-avatar>
          </template>
          <v-card-text style="height: 35px">
            Desenvolvimento, direitos e Políticas públicas.
          </v-card-text>
          <v-card-actions>
            <v-btn prepend-icon="mail" size="small"> Email </v-btn>
            <v-btn prepend-icon="link" size="small"> LinkedIn </v-btn>
            <v-btn prepend-icon="link" size="small"> Lattes </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
  <div v-if="route.params.session === 'sobre'">
    <v-row>
      <v-col>
        <v-card style="border-top: 6px solid #3792e5">
          <v-card-title style="white-space: unset; line-height: 26px">
            DESENVOLVIMENTO E POLÍTICAS PÚBLICAS
          </v-card-title>
          <v-card-text>
            <div style="font-weight: bold">POLÍTICAS PÚBLICAS E INOVAÇÃO</div>
            <p>
              Esta linha concentra-se nos estudos que partem de uma reflexão
              sobre o papel do Estado nos processos de inovação, privilegiando a
              análise das políticas públicas que visaram e visam proteger os
              interesses coletivos frente aos individuais ou de grupos
              hegemônicos.
            </p>
            <br />
            <div style="font-weight: bold">
              PROPRIEDADE INTELECTUAL E INTERESSE COLETIVO
            </div>
            <p>
              Na interface entre a História e o Direito, esta linha destaca os
              embates e as relações entre as dimensões dos direitos individuais
              e coletivos. Tem foco especialmente na construção no campo
              jurídico do processo de legitimação e deslegitimação das
              propriedades e dos bens comuns.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card style="border-top: 6px solid #25b60d">
          <v-card-title style="white-space: unset; line-height: 26px">
            CULTURA, ARTES E DIREITOS: ENTRE A PROTEÇÃO E O ACESSO
          </v-card-title>
          <v-card-text>
            <div style="font-weight: bold">
              POLÍTICAS CULTURAIS DE ACESSO À CULTURA
            </div>
            <p>
              Esta linha analisa a produção do conhecimento, a democratização e
              acesso à informação. Originária do grupo de pesquisa Núcleo de
              Estudos e Pesquisa em Direitos Autorais e Culturais (NEDAC) da
              Universidade Federal do Rio de Janeiro (UFRJ), apoia-se no diálogo
              entre o Direito, a Produção Cultural e a Economia Criativa.
            </p>
            <br />
            <div style="font-weight: bold">
              ARTES, DIREITOS E PRODUÇÃO CULTURAL
            </div>
            <p>
              Esta linha recupera as múltiplas facetas do direito autoral e das
              escalas de direitos sobre um mesmo produto cultural. Na interface
              entre Arte, Direito e História, desconstrói o processo de
              construção da produção da arte.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card style="border-top: 6px solid #e53737">
          <v-card-title style="white-space: unset; line-height: 26px">
            TERRA, RIQUEZA E PATRIMÔNIO
          </v-card-title>
          <v-card-text>
            <div style="font-weight: bold">
              RIQUEZA E TRANSMISSÃO DE PATRIMÔNIO
            </div>
            <p>
              Na interface entre História e Economia, esta linha de pesquisa
              privilegia os estudos que analisam a transmissão de patrimônio,
              enfatizando o processo de construção da fortuna e seu avesso, a
              formalização das propriedades e as disputas e conflitos que
              envolvem os bens patrimoniais.
            </p>
            <br />
            <div style="font-weight: bold">
              HISTÓRIA SOCIAL DAS PROPRIEDADES
            </div>
            <p>
              Esta linha tem foco na legislação agrária em sua relação com os
              conflitos e movimentos sociais no país. Dada a importância da
              terra, tanto como um bem limitado quanto como o eixo inaugural da
              discussão histórica sobre o conceito de propriedade, a linha
              concentra-se na dimensão histórica — ainda que descontínua — dos
              embates entre interesses individuais e coletivos.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
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
