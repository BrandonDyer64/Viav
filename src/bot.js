const client = require("./Client");
const textChannelManager = require("./TextChannelManager");
const voiceChannelManager = require("./VoiceChannelManager");
const { TOKEN } = process.env;

if (!TOKEN) {
  console.log("TOKEN=DISCORD_TOKEN npm start");
  return;
}

voiceChannelManager.emitter.on("channelCreated", textChannelManager.create);
voiceChannelManager.emitter.on("channelDestroyed", textChannelManager.destroy);

client.on("voiceStateUpdate", require("./VoiceUpdate"));
client.on("message", require("./Message"));

client.login(TOKEN);
