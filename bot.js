/*
   ========================
            BOT.JS
    AUTHOR(S): IAN BOWLING
   ========================
*/

const prefix = '--'; //easy to change prefix
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity(`& thonking`);
});

client.on("message", async message => {
    if (message.author.bot)
		return; //don't parse messages sent by other bots (including ourself)

	const args = message.content.slice('--').trim().split(/ +/g); //get arguments to a command
	const command = args.shift().toLowerCase(); //make everything lower case.

	if(command === "--ping") {
    	const m = await message.channel.send("Ping?"); //send a message while calculating ping
    	m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`); //edit after calculated
	}
});

client.login('NDA0NDQ0MjA5MzQ5NjU2NTg3.DUV7kA.A1JXjp49UYA4cbixC3wm6t1QYfU');