const Discord = require("discord.js");

module.exports = {
	name: "serverinfo",
	async run (bot, message, args) {
		let embed = new Discord.MessageEmbed()
            .setColor('#FE8000')
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s information`)
            .addField("ID", message.guild.id, true)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`);
        message.channel.send(embed);
	}
}