const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Questo è un H1!'.toUpperCase(),
      paragraph: 'Questo è invece un paragrafo'.toLowerCase(),
      imageUrl: 'https://avatars.githubusercontent.com/u/499550?v=4', 
      evan: 'Lui è Evan You. Ha sviluppato Vue.JS e ha usato la licenza open-source, svincolando lo sviluppo del progetto dagli interessi di questa o quella azienda. Bravo, Evan.'
    }
  }
}).mount('#app')