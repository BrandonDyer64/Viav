const { ShardingManager } = require("discord.js");
const { TOKEN: token } = process.env;
const manager = new ShardingManager("./src/bot.js", { token: token });

manager.spawn();
manager.on("launch", shard => console.log(`Launched shard ${shard.id}`));
