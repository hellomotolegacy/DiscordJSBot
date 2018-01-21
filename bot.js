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
	console.log(`Logged in as ${client.user.tag}!\n\n\n`);
	client.user.setActivity(`& thonking`);
	client.user.setStatus('dnd');
});

client.on("message", async message => {
	var cmd = message + ''; //message is an object, so make it a string.

	if (!cmd.includes(prefix))
		return; //message doesn't include prefix, so ignore it.

	var com = cmd.split(prefix)[1]; //remove prefix

    if (message.author.bot)
		return; //don't parse messages sent by other bots (including ourself)

	if(com === "ping") {
    	const m = await message.channel.send("Ping?"); //send a message while calculating ping
    	m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`); //edit after calculated
	}
});

client.login('NDA0NDQ0MjA5MzQ5NjU2NTg3.DUV7kA.A1JXjp49UYA4cbixC3wm6t1QYfU');