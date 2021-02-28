const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
const canvacord = require('canvacord');
bot.login('');

const randomanime = require('random-anime')
const anime = randomanime.anime()
const nsfw = randomanime.nsfw()



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
})



const Eris = require("eris")
const client = new Eris("token")

const events = require('events');

const eventEmitter = new events.EventEmitter();

const activities_list = [
  "Lavet af Dev | ♡#5373.",
  "Spiller med min master Dev | ♡#5373.",
  ".help for at få hjælp",
  "Join SolidRebels idag!",
  "https://discord.gg/u2zMaUCB"
  ];


bot.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.content === ".trigger") {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
    }
});


bot.on('message', message => {
    if (message.content === '.help') {

      const embed = new MessageEmbed()
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
  });

bot.on('message', async message =>{
    if(message.content === ".info" ){
                const target = message.mentions.users.first() || message.author
                const whois = new Discord.MessageEmbed()
                .setAuthor(`${target.username}`)
                .addField('Discord Name', `${target.username}`, true)
                .addField('Tag', `${target.discriminator}`, true)
                .addField('Account Creation Date', `${target.createdAt}`, true)
                .addField('Is bot?', `${target.bot}`, true)
                .addField('ID', `${target.id}`, true)
                .addField('LM', `${target.lastMessage}`, true)
                .setThumbnail(target.displayAvatarURL({dynamic: true}))
                .setColor('#FE8000')
                message.channel.send(whois)
    }
});


bot.on('message', async message =>{
  if(message.content === ".serverinfo"){
    let embed = new Discord.MessageEmbed()
            .setColor('#FE8000')
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s information`)
            .addField("ID", message.guild.id, true)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
        message.channel.send(embed)
  }
});



bot.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
      bot.user.setActivity(activities_list[index]);
  }, 3000);
});


bot.on("message", async message => {
  if (message.content === ".anime") {
    const anime = randomanime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime);
    message.channel.send(embed);
  }
});
