## Form 

```js
const { Forms } = require('discord-things')

await Forms({ 
    message: message, //Object
    token: 'YOUR-TOKEN', //Bot token
        embed: {
         titulo: 'Form', //Title of embed
         color: 'ORANGE', //Color of embed
         pie: 'Footer Form' //Footer of embed
        },
        tiempo: 300000, //Time for disabled
        preguntas: ['Country?', 'Age?', 'Why you want be mod?'], //Array of the questions
        canal: 'CHANNEL-ID' //The channel to which the form will be sent
    })
```
