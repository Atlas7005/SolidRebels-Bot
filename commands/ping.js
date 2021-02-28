const Discord = require('discord.js')

module.exports = {
    name: "ping", //command name, e.g. of what you would send in chat: .ping
    description: "ping command",

    async run (bot, message, args) {

        const ping = new Discord.MessageEmbed()
        .setTitle('Pong! 🏓')
        .setColor('#FE8000')
        .setTimestamp()
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp} ms\``);
        
        

        message.channel.send(ping)
    }
}