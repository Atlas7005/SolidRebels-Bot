const Discord = require('discord.js');
const canvacord = require('canvacord');

module.exports = {
	name: "trigger",
	async run (bot, message, args) {
		let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
	}
}