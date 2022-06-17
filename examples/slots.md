## Slots

```js
const { Slots } = require('discord-things')

await Slots({
    message: message, //Object
        embed: {
         titulo: 'Slot', //Title
         color_ganador: 'GREEN', //Win color embed
         color_perdedor: 'RED' //Loose color embed
        },
        boton: {
         etiqueta: 'Next', //Label
         emoji: '▶️', //Emoji 
         estilo: 'SUCCESS' //Style
        },
        msj_ganador: 'GG', //Win footer
        msj_perdedor: 'FF', //Loose footer
        tiempo: '300000', //Time for disabled
        autor: 'Only <@[usuario]> can use!', //Only the author
        terminado: 'Finish!', //Embed message when the time finish
      })
```
