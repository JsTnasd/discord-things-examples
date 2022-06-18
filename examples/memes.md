## Memes

```js
const { Memes } = require('discord-things') 
//At the moment the memes will be in english

await Memes({
    message: message, //Object
        boton_uno: { //First button customization
          etiqueta: 'Remove', //Label
          emoji: '🛑', //Emoji (Optional)
          estilo: 'DANGER' //Style
        },
        boton_dos: { 
          etiqueta: 'Next',
          emoji: '▶️',
          estilo: 'DANGER'
        },
        tiempo: 300000, //Time for disabled
        autor: 'Only <@[usuario]> can use!', //Only the author
        color: 'GREEN', //Embed color
        remover: 'You remove the button!' //Remove button action
       })
```
