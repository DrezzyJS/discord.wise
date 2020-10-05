# Discord Wise

- This is a simple way to consume the discord api

## Instalation

```js
npm i --save discord.wise
```

## Simple Usage

```js
const Discord = require("discord.wise");
const client = new Discord.Client({
  token: "token" //Bot Token
});

client.on("connect", () => {
  console.log("Bot Online !");
});

client.on("message", message => {
  if (message.content === "!ping") {
    //Send Messages
    client.sendMessage({
      content: "Pong !",
      channelId: message.channel_id
    });
  }
});
```
