const client = require("./Client");
const { TOKEN: token } = process.env;

if (!token) {
  console.log("TOKEN=DISCORD_TOKEN npm start");
  return;
}

client.on("voiceStateUpdate", require("./VoiceUpdate"));
client.on("message", require("./Message"));

client.login(token);
