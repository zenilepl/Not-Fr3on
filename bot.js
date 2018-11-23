const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("ready", () => {
let channel =     client.channels.get("513473609713319941")
setInterval(function() {
channel.send(`zenilep`);
}, 25)
})
 
 
client.login("client.login(process.env.BOT_TOKEN);");
