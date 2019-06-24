const Discord = require("discord.js");
const client = new Discord.Client();

let token = process.env.TOKEN;
if (!token) {
  console.log("TOKEN=DISCORD_TOKEN npm start");
  return;
}

client.on("voiceStateUpdate", require("./VoiceUpdate"));

client.login(token);
