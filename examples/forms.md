## Form 

```js
const { Forms } = require('discord-things')

await Forms({ 
    message: message, //Object
        embed: {
         titulo: 'Form', //Title of embed
         color: 'ORANGE', //Color of embed
         pie: 'Footer Form' //Footer of embed
        },
        tiempo: '300000', //Time for disabled
        preguntas: ['Country?', 'Age?'] //Array of the questions
    })
```
