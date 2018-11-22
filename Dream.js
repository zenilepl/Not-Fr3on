const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Hassan_Gamer");


client.on("ready", () => {
let channel =     client.channels.get("اي بي الشات")
setInterval(function() {
channel.send(`Not Fr3on`);
}, 25)
})
 
 
client.login("NTE1MjMyNTgyNzI0NjE2MjEw.DtiHTw.LbB-5e5tSXMgc_JJQDzXPJtQgcs");