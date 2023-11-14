import { ref } from 'vue'
import { defineStore } from 'pinia'
import { SquidexClient } from '@squidex/squidex'

const client = new SquidexClient({
  appName: 'proprietas',
  clientId: 'proprietas:default',
  clientSecret: '2vodu8s43nxgcnp4rfm4piaulkvvsfoxsp164x19dlkx',
  environment: 'https://cloud.squidex.io/'
  // tokenStore: new SquidexStorageTokenStore(sessionStorage, 'CustomKey')
  // tokenStore: new SquidexInMemoryTokenStore(),
  // tokenStore: new SquidexStorageTokenStore() // Keep the tokens in the local store.
})

export const useContentStore = defineStore('contents', () => {
  const aboutContent = ref()
  async function loadAboutContent() {
    try {
      const response = await client.contents.getContent(
        'about',
        'f1e6d9fe-58e4-4277-a0cc-e2fabe921003'
      )
      aboutContent.value = response.data
    } catch (err) {
      console.log(err)
    }
  }

  return { aboutContent, loadAboutContent }
})
