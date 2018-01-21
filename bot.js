const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDA0NDQ0MjA5MzQ5NjU2NTg3.DUV7kA.A1JXjp49UYA4cbixC3wm6t1QYfU');