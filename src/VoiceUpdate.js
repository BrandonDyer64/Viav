const manager = require("./VoiceChannelManager");

module.exports = (oldMember, newMember) => {
  if (oldMember.voiceChannelID == newMember.voiceChannelID) return;

  function handler(member, count, fun) {
    const channel = member.voiceChannel;

    if (!channel) return;
    if (channel.members.array().length != count) return;

    fun(channel, member);
  }

  handler(oldMember, 0, manager.destroyChannel);
  handler(newMember, 1, manager.duplicateChannel);
};
