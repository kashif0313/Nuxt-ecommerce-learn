// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
   
      pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title:"Next 3 CRUD Application",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link:[
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
          crossorigin: ''
        },
        {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        crossorigin: ''
      }
    ],
      script:[{
        src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        type:"text/javascript"
      }]
    }
  }
})
