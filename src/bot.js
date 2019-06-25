const client = require("./Client");
const { TOKEN: token } = process.env;
const prefix = "!";

if (!token) {
  console.log("TOKEN=DISCORD_TOKEN npm start");
  return;
}

client.on("voiceStateUpdate", require("./VoiceUpdate"));
client.on("message", require("./Message"));

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "stats") {
    const promises = [
      client.shard.fetchClientValues("guilds.size"),
      client.shard.broadcastEval(
        "this.guilds.reduce((prev, guild) => prev + guild.memberCount, 0)"
      )
    ];

    return Promise.all(promises)
      .then(results => {
        const totalGuilds = results[0].reduce(
          (prev, guildCount) => prev + guildCount,
          0
        );
        const totalMembers = results[1].reduce(
          (prev, memberCount) => prev + memberCount,
          0
        );
        return message.channel.send(
          `Server count: ${totalGuilds}\nMember count: ${totalMembers}`
        );
      })
      .catch(console.error);
  }
});

client.login(token);
