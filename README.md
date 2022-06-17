# 🎁 **Discord-things**

<a href="https://npmjs.com/discord-things"><img src="https://img.shields.io/npm/v/discord-things.svg?style=flat&label" /></a>
<a href="https://npmjs.com/discord-things"><img src="https://img.shields.io/npm/dt/discord-things?style=flat&label=Downloads" /></a> 

## Features
- ⏱️ Easy to user
- ⚙️ Customizable

## Functions
- Forms 📄
- Memes 😂
- Slot 🎰
- Truth or dare 🎭

## Installation
```
npm install discord-things
```

## Examples
```js
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on('ready', () => { 
  console.log('Ready!')
})

client.on('messageCreate', async (message) => {

  if(message.content === '!memes') {

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
        tiempo: '300000', //Time for disabled
        autor: 'Only <@[usuario]> can use!', //Only the author
        color: 'GREEN', //Embed color
        remover: 'You remove the button!' //Remove button action
       })
    }
})

client.login('TOKEN')
```

- [Mora function examples](https://github.com/JsTnasd/discord-things-examples)

