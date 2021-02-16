process.on("warning", e => console.warn(e.stack));
process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 50;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://numerous-bristle-expansion.glitch.me`);
}, 280000);
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "A!";
const cooldown = new Set()
const cdtime =5;
client.login("");
 client.on("ready", () => {
  console.log(`${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.size}`);
  console.log(`Users: ${client.users.size}`);
  client.user.setActivity(`${prefix}help`, { Type: "Playing" });
});

//////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.username, message.author.AvatarURL)
      .setTitle(`Click Here To Add : Anti Vandalism`)
      .setURL(``) .setDescription(`

**Info Commands**
\`A!userinfo\`
\`A!serverinfo\`
\`A!botinfo\`

**Security Number**
\`A!anti kick\` : **Number**
\`A!anti ban\` : **Number**
\`A!anti roleD\` : **Number**
\`A!anti roleC\` : **Number**
\`A!anti channelD\` : **Number**
\`A!anti channelC\` : **Number**
\`A!anti time\` : **Number**
\`A!settings\`

**Srcurity On/Off**
\`A!anti bot\` : **on-off**
\`A!anti problem\` : **on-off**
\`A!anti subversive\` : **on-off**

**Moderation Commands**
\`A!lock\`
\`A!unlock\`
\`A!ban\` : @User
\`A!kick\` : @User
\`A!unban\` : Id / all


[Support]() - [Website]() - [Vote]()

`);

    message.channel.send(help);
  }
});

//////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {

    if (!message.channel.guild)
      return message.channel.send(
        "Sorry This Command Only For Servers."
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    const lock = new Discord.MessageEmbed()
      .setColor(color)
      .setDescription(
        `🔒 | Locked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Send Message : ${ghallatw}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(lock);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (!message.channel.guild)
      return message.channel.send(
        "Sorry This Command Only For Servers."
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setColor(color)
      .setDescription(
        `🔓 | UnLocked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Send Message : ${rastw}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});


//////
const rast = "<:482D5187109F49E9BA37CA4EEEE235AE:804633625919488020>";
const rastw = "<:717640712312586373:807900756740669480>";
const ghallat = "<:23AF05F497814E4392729DF5705EBDAB:804633546210672672>";
const ghallatw = "<:717640712144945271:807900787068895253>";
const logosec = "<:762E9CF
