import { defineNuxtConfig } from 'nuxt'
import { isDevelopment } from 'std-env'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    storage: {
      cms: {
        driver: isDevelopment ? 'memory' : 'cloudflare-kv-binding',
        options: {
          binding: 'testkv'
        }
      }
    }
  }
})
