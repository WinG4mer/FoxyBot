const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
    var list = [
      'ser velho(a)',
      'ser feio(a)',
      'fazer nada'
    ];
    
    var rand = list[Math.floor(Math.random() * list.length)];
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) {
    return message.reply('lembre-se de mencionar um usuário válido para cancelar!');
    }
      await message.channel.send(`${message.author} cancelou ${user} por ${rand}`);
    }