import { ref } from "vue";
import { defineStore } from "pinia";
import { SquidexClient } from "@squidex/squidex";

const client = new SquidexClient({
  appName: "proprietas",
  clientId: "proprietas:default",
  clientSecret: "2vodu8s43nxgcnp4rfm4piaulkvvsfoxsp164x19dlkx",
  environment: "https://cloud.squidex.io/",
  // tokenStore: new SquidexStorageTokenStore(sessionStorage, 'CustomKey')
  // tokenStore: new SquidexInMemoryTokenStore(),
  // tokenStore: new SquidexStorageTokenStore() // Keep the tokens in the local store.
});

export const useContentStore = defineStore("contents", () => {
  const language = ref("pt");
  const items = ref([] as any);
  async function loadContents() {
    try {
      const response = await client.contents.getContents("content");
      for (const item of response.items) {
        const content = JSON.parse(JSON.stringify(item.data));
        content.session = content.session.iv;
        content.order = content.order.iv;
        console.log(content);
        items.value.push(content);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return { items, language, loadContents };
});
