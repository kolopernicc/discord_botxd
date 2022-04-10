const Discord = require("discord.js");
const { on } = require("process");
const client = new Discord.Client();
const config = require("./config.json")
const prefix = config.prefix

client.on("ready",() => {
    console.log(`login ${client.user.tag}`);
})

client.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()

});

client.login(config.token)