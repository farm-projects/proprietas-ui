<template>
  <div>
    <v-row no-gutters class="home">
      <v-col :cols="columns.content">
        <div ref="el">
          <div v-for="content in contents" class="home-content">
            <div class="title text-primary">
              {{ content.title[language] }}
              <div class="subtitle">
                {{ content.subtitle[language] }}
              </div>
            </div>
            <div
              class="text"
              v-if="content.text"
              v-html="content.text[language]"
            ></div>
            <div
              class="text"
              v-if="content.code"
              v-html="content.code[language]"
            ></div>
          </div>
          <div>
            <aboutcards></aboutcards>
          </div>
        </div>
      </v-col>
      <v-col :cols="columns.news" :style="`height: ${newsHeight}px;`">
        <div :class="mobile ? 'home-news-mobile' : 'home-news'">
          <div class="title text-primary news-title">
            {{ translations.last_news[language] }}
          </div>
          <div class="news-cards">
            <newsCards mode="home"></newsCards>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
  <footerLogos></footerLogos>
</template>

<script setup lang="ts">
import footerLogos from "../components/footer.vue";
import aboutcards from "../components/aboutCards.vue";
import newsCards from "../components/newsCards.vue";

import { computed, ref } from "vue";
import { useContentStore } from "../stores/contents";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";

const el = ref();

const { mobile, width } = useDisplay();

const store = useContentStore();

const { language, items, translations } = storeToRefs(store);

const newsHeight = computed(() => (mobile ? "" : el.value?.offsetHeight));

const contents = computed(() => {
  return items.value
    .filter((c: any) => c.session === "sobre")
    .sort((a: any, b: any) => a.order - b.order);
});

const columns = computed(() => {
  if (mobile.value) {
    return {
      content: 12,
      news: 12,
    };
  }
  if (width.value > 1400) {
    return {
      content: 8,
      news: 4,
    };
  }
  return {
    content: 7,
    news: 5,
  };
});
</script>

<style lang="scss">
.home {
  .home-news-mobile {
    padding: 0px 0px 10px 0px;
    margin-top: 30px;
  }
  .home-news {
    padding: 0px 20px 10px 0px;
    height: 100%;
    margin-left: 40px;
  }
  .news-title {
    margin-top: 10px;
    line-height: 28px;
    border-bottom: 1px solid rgba(var(--v-theme-bluebackground));
  }
  .news-cards {
    height: calc(100% - 30px);
    overflow: auto;
    padding: 0px 5px 15px 0px;
  }
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    .subtitle {
      font-size: 18px;
    }
  }
  .home-content {
    margin: 0px 0 40px 0;
    ul {
      margin-left: 20px;
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
}
</style>
