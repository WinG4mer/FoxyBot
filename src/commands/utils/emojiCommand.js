const Discord = require('discord.js');

module.exports = {
  name: 'emoji',
  aliases: ['emoji', 'emojo'],
  cooldown: 3,
  guildOnly: true,
  async run(client, message, args) {
    if (!args[0]) {
      return message.reply(
        `**${message.author.username}, a sintaxe correta é:** `
        + '`'
        + 'f!emoji nomedoemoji`',
      );
    }
    const emoji = message.guild.emojis.cache.find((emoji) => emoji.name === args[0]);

    if (!emoji) {
      message.reply(
        `\`${args[0]}\` **não é um emoji deste servidor.**`,
      );
    } else if (emoji.animated === true) {
      await message.reply({
        files: [
          {
            attachment: emoji.url,
            name: 'emoji_owo.gif',
          },
        ],
      });
    } else {
      await message.reply({
        files: [
          {
            attachment: emoji.url,
            name: 'emoji_owo.png',
          },
        ],
      });
    }
  },

};
