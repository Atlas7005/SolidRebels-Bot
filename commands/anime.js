const Discord = require("discord.js");
const randomanime = require('random-anime');

module.exports = {
	name: "anime",
	async run (bot, message, args){
		const anime = randomanime.anime();
    	const embed = new Discord.MessageEmbed().setImage(anime);
		message.channel.send(embed);
	}
}