const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
  name: 'covid',
  aliases: ['covid', 'covid19'],
  cooldown: 3,
  guildOnly: false,
  async run(client, message, args) {
    const countries = args.join(' ');

    const noArgs = new Discord.MessageEmbed()
      .setTitle('Argumentos faltando')
      .setColor(0xFF0000)
      .setDescription('Você esqueceu alguns argumentos: (ex: f!covid all || f!covid Canada)')
      .setTimestamp();

    if (!args[0]) return message.reply(noArgs);

    if (args[0] === 'all') {
      fetch('https://covid19.mathdro.id/api')
        .then((response) => response.json())
        .then((data) => {
          const confirmed = data.confirmed.value.toLocaleString();
          const recovered = data.recovered.value.toLocaleString();
          const deaths = data.deaths.value.toLocaleString();

          const embed = new Discord.MessageEmbed()
            .setTitle('COVID-19 Status mundial')
            .addField('Casos confirmados', confirmed)
            .addField('Recuperados', recovered)
            .addField('Mortes', deaths);

          message.reply(embed);
        });
    } else {
      fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
        .then((response) => response.json())
        .then((data) => {
          const confirmed = data.confirmed.value.toLocaleString();
          const recovered = data.recovered.value.toLocaleString();
          const deaths = data.deaths.value.toLocaleString();

          const embed = new Discord.MessageEmbed()
            .setTitle(`COVID-19 Status de: **${countries}**`)
            .addField('Casos Confirmados', confirmed)
            .addField('Recuperados', recovered)
            .addField('Mortes', deaths);

          message.reply(embed);
        }).catch((e) => message.reply('País inválido'));
    }
  },

};
