const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Hassan_Gamer");


client.on("ready", () => {
let channel =     client.channels.get("513473609713319941")
setInterval(function() {
channel.send(`zenilep`);
}, 25)
})
 
 
client.login("client.login(process.env.BOT_TOKEN);");