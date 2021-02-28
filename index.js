const Discord = require('discord.js');
const bot = new Discord.Client();

const { token } = require('./config.json');

const { readdirSync, read } = require('fs');

const { join } = require('path');

bot.commands = new Discord.Collection();

const prefix = '.';

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

bot.on("error", console.error);

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;

  	if(message.content.startsWith(prefix)) {
    	const args = message.content.slice(prefix.length).trim().split(/ +/);

    	const command = args.shift().toLowerCase();

    	if(!bot.commands.has(command)) return;

      	try {
        	bot.commands.get(command).run(bot, message, args);
      	} catch (error){
        	console.error(error);
      	}
  	}
});

const activities_list = [
  	"Lavet af Dev | ♡#5373.",
	"Spiller med min master Dev | ♡#5373.",
	".help for at få hjælp",
	"Join SolidRebels idag!",
	"https://discord.gg/u2zMaUCB"
];

bot.on('ready', () => {
  	setInterval(() => {
    	const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
      	bot.user.setActivity(activities_list[index]);
  	}, 3000);
});

bot.login(''); // Jeg kan bedst lide at smide login til sidst, dog burde det ikk ændre noget.