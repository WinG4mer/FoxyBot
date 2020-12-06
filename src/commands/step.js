const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete().catch(O_o => {});
    var list = [
        'https://cdn.discordapp.com/attachments/745396328351268885/776930400990920734/6a0.gif',
        'https://cdn.discordapp.com/attachments/745396328351268885/776930405181554698/tenor_10.gif',
        'https://cdn.discordapp.com/attachments/745396328351268885/776930416966893588/tenor_8.gif'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) {
        return message.reply('Lembre-se de mencionar um usuário válido para pisar!')
}

const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`${message.author} pisou em ${user}`)
.setImage(rand)
.setTimestamp()
.setFooter('Made With 💖 by WinGamer')
await message.channel.send(embed)
}