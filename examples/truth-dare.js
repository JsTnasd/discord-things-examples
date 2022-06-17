const { TruthOrDare } = require('discord-things')

await TruthOrDare({ 
      message: message, 
      boton_uno: { //True button
        etiqueta: 'True', //Label
        emoji: '👀', //Emoji
        estilo: 'SUCCESS' //Style
      },
      boton_dos: { //Challenge button
        etiqueta: 'Challenge',
        emoji: '🐱',
        estilo: 'SUCCESS'
      },
        embed: {
          titulo: 'True or challenge', //Title of embed
          descripcion: 'Select one', //Description of embed
          color: 'GREEN', //Color of embed
          imagen: 'image-link', //Image of embed (optional)
          pie: 'Hello' //Footer of embed (optional)
        },
        tiempo: '300000', 
        lenguaje: 'es', //Language (en = spanish / en = english)
        autor: 'Only <@[usuario]> can use!',
        titulo_verdad: 'True', //Title of true embed
        titulo_reto: 'Challenge' //Title of challenge embed
      })
