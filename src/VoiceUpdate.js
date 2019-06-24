const channelJoin = require("./ChannelJoin");
const channelLeave = require("./ChannelLeave");

module.exports = (oldMember, newMember) => {
  if (oldMember.voiceChannelID == newMember.voiceChannelID) return;

  const oldChannel = oldMember.voiceChannel;
  if (oldChannel) {
    channelLeave(oldChannel, oldMember);
  }

  const newChannel = newMember.voiceChannel;
  if (newChannel) {
    channelJoin(newChannel, newMember);
  }
};
