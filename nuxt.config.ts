// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Nuxt Dojo',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
          ],
            link: [
            // <link rel="icon" type="image/x-icon" href="/favicon.ico">
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
        ]
        }
      }
})
