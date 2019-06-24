const Discord = require("discord.js");
const client = new Discord.Client();

let token = process.env.TOKEN;
if (!token) {
  console.log("TOKEN=DISCORD_TOKEN npm start");
  return;
}

client.on("voiceStateUpdate", require("./VoiceUpdate"));

client.on('message', async (msg) => {
  if (msg.mentions.members.first().id === client.user.id) {
    const embed = new RichEmbed()
      .setTitle('Help')
      .addField('^@Viav', 'Sends I this message')
    const dm = await msg.author.createDM()
    dm.send({ embed })
  }
})
client.login(token);
