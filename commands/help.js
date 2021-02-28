const Discord = require("discord.js");

module.exports = {
	name: "help",
	async run(bot, message,args) {
		const embed = new Discord.MessageEmbed()
        	.setTitle('Her kan du se alle vores commands!')
        	.setColor('#FE8000')
        	.setThumbnail('https://media.discordapp.net/attachments/705896301849739264/811639649399078962/yes_yes.jpg?width=676&height=676')
        	.addField('.trigger', '``find ud af det ツ.``', true)
        	.addField('.info', '``Finder info om dig.``', true)
        	.addField('.serverinfo', '``Finder info om serveren.``', true)
        	.addField('.tictactoe (@person)', '``Du spiller kryds og bolle.``', true)
        	.addField('.howgay', '``Viser hvor gay du er.``', true)
        	.addField('.ping', '``viser pingen.``', true)
        	.addField('.rps', '``Du spiller sten, saks, papir.``', true)
        	.addField('.anime', '``Sender et billede af en anime pige.``', true)
        	.setTimestamp()
        	.setFooter('Who knows?', 'https://media.discordapp.net/attachments/705896301849739264/811639649399078962/yes_yes.jpg?width=676&height=676');
    	message.channel.send(embed);
	}
}