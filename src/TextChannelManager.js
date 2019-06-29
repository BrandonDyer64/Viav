function create(voiceChannel, name, code) {
  const guild = voiceChannel.guild;
  guild
    .createChannel("voice-viav-" + code, { type: "text" })
    .then(channel => {
      if (voiceChannel.parent) {
        return channel.setParent(voiceChannel.parent);
      }
    })
    .then(channel => {
      channel.setTopic(
        `https://discordapp.com/channels/${guild.id}/${voiceChannel.id}`
      );
    })
    .catch(console.error);
}

function destroy(voiceChannel, name, code) {
  textChannel = voiceChannel.guild.channels.find(
    channel => channel.name === "voice-viav-" + code.toLowerCase()
  );
  if (textChannel) {
    textChannel.delete();
  }
}

module.exports = {
  create,
  destroy
};
