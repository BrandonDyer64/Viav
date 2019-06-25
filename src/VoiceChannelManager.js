const EventEmitter = require("events");
class Emitter extends EventEmitter {}
const emitter = new Emitter();
const config = require("../config");

let codeNum = 31;

function duplicateChannel(channel, member) {
  if (channel.name.includes(config.escape)) return;
  if (channel.name.includes(config.channelDelimiter)) return;
  if (!channel.manageable) return;

  channel.clone().then(newChannel => {
    const code = codeNum.toString(32);
    codeNum = ++codeNum % 0xffff;

    channel
      .setName(channel.name + config.channelDelimiter + code.toUpperCase())
      .then(channel =>
        emitter.emit("channelCreated", channel, channel.name, code)
      );
  });
}

function destroyChannel(channel) {
  if (channel.name.includes(config.escape)) return;
  if (!channel.manageable) return;

  const [name, code] = channel.name.split(config.channelDelimiter);
  channel.delete().then(() => {
    emitter.emit("channelDestroyed", channel, name, code);
  });
}

module.exports = {
  destroyChannel,
  duplicateChannel,
  emitter
};
