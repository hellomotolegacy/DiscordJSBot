const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

function CheckCommands(msg, com) {
	switch(com) {
		case 'ping':
			msg.reply('Pong!');
	}
}

client.on('message', msg => {
	CheckCommands(msg, msg.content); //cleaner to make one function for parsing sent messages.
});

client.login('NDA0NDQ0MjA5MzQ5NjU2NTg3.DUV7kA.A1JXjp49UYA4cbixC3wm6t1QYfU');