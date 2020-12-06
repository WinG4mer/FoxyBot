const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
  
    const sayMessage = args.join(' ');
    message.delete().catch(O_o => {});
var list = [
  'https://cdn.zerotwo.dev/LAUGH/b2de3ceb-3faf-4469-8ba5-fba5497091c1.gif',
  'https://cdn.zerotwo.dev/LAUGH/5b5dba96-626f-492c-bdaa-c5e4b4675ed7.gif',
  'https://cdn.zerotwo.dev/LAUGH/94a31cb6-73b3-4d77-a0c2-f1a995c3f845.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} está rindo ` + sayMessage)
        .setImage(rand)
        .setTimestamp()
        .setFooter('Made with 💖 by WinGamer | Gifs by: ByteAlex#1644')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}