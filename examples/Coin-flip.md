## Coin flip
```js
const { CoinFlip } = require('discord-things')

await CoinFlip({ 
      message: message, 
      boton_uno: { //Heads button
        etiqueta: 'Heads', //Label
        emoji: '🪙', //Emoji
        estilo: 'SUCCESS' //Style
      },
      boton_dos: { //Tails button
        etiqueta: 'Tails',
        emoji: '🪙',
        estilo: 'SUCCESS'
      },
        embed: {
          titulo: 'Tails or heads?', //Title of embed
          descripcion: 'Select one', //Description of embed
          color: 'GREEN', //Color of embed
          pie: 'Hello' //Footer of embed (optional)
        },
        tiempo: 300000, //Time for disabled
        lenguaje: 'en', //Language (en = spanish / en = english)
        autor: 'Only <@[usuario]> can use!', //Only the author
        mensaje_ganador: '<@[ganador]> you win with [resultado]', //Message when he wins
        mensaje_perdedor: '<@[perdedor]> you loose with [resultado]', //Message when he lost
        color_ganador: 'BLACK', //Embed color when he wins
        color_pededor: 'RED', //Embed color when he lost
        titulo_cara: 'Heads', //Title of heads embed
        titulo_cruz: 'Tails', //Title of tails embed
      })
```
