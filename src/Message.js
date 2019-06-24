const client = require("./Client");

module.exports = msg => {
  if (!msg.mentions.members) return;
  if (!msg.mentions.members.first()) return;
  if (msg.mentions.members.first().id !== client.user.id) return;

  const embed = {
    title: "**Viav Info**",
    description: "A voice channel powerhouse.",
    color: 2001125,
    fields: [
      {
        name: ":loud_sound: Voice Channels",
        value: "Auto voice channels"
      },
      {
        name: ":hash: Text Channels",
        value: "Every voice channel gets a text channel"
      },
      {
        name: ":desktop: Screen Sharing",
        value: "Screen sharing button"
      },
      {
        name: ":earth_americas: More Info",
        value: "Find out more on the [**web**](https://viav.app/)"
      }
    ]
  };

  const dm = msg.author
    .createDM()
    .then(dm => {
      dm.send({ embed });
    })
    .catch(console.log);
};
