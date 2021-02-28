const Discord = require("discord.js");

module.exports = {
	name: "info",
	async run (bot, message, args) {
		const target = message.mentions.users.first() || message.author;
        const whois = new Discord.MessageEmbed()
        	.setAuthor(`${target.username}`)
            .addField('Discord Name', `${target.username}`, true)
            .addField('Tag', `${target.discriminator}`, true)
            .addField('Account Creation Date', `${target.createdAt}`, true)
            .addField('Is bot?', `${target.bot}`, true)
            .addField('ID', `${target.id}`, true)
            .addField('LM', `${target.lastMessage}`, true)
            .setThumbnail(target.displayAvatarURL({dynamic: true}))
            .setColor('#FE8000');
        message.channel.send(whois);
	}
}