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
const prefix = "z.";
const cooldown = new Set()
const cdtime =5;
client.login("NzgyMzU2OTUxMTcwNDE2Njcw.X8LAsA.QYf90UhCwQvX7KfgQOMnIhHmwYA");
client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}!`);
client.user.setStatus("idle");
client.user.setActivity(`z.help | coming soon`, {type: "PLAYING"});
});

//////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`**⏱ | Please wait for 5 second**`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.username, message.author.AvatarURL)
      .setThumbnail(message.author.avatarURL())
      .setTitle("")
      .setURL(``) .setDescription(`

🌐丨**Info**
\`z.user\`
\`z.server\`
\`z.ping\`
\`z.bot\`

🔒丨**Security**
\`z.anti kick\`
\`z.anti ban\`
\`z.anti roleC\`
\`z.anti roleD\`
\`z.anti channelC\`
\`z.anti channelD\`
\`z.anti time[0.1]\`
\`z.anti bot [on/off]\`

⚙️丨**Moderation**
\`z.lock\` , \`z.unlock\`
\`z.ban\` , \`z.kick\`
\`z.unban\` , \`z.banlist\`
\`z.mute\` , \`z.unmute\`
\`z.say\` 



[Invite](https://discord.com/api/oauth2/authorize?client_id=782356951170416670&permissions=8&scope=bot
) - [Support](https://discord.gg/cetGQvWD3h) - [Website](https://security.zheerspiderman.repl.co/)

`);

    message.channel.send(help);
  }
});

////////

client.on('message', prof=>{
 
    if(prof.content.startsWith(prefix + 'lock'))
    {
       if(!prof.guild.me.hasPermission('MANAGE_CHANNELS'))return prof.reply('**i dont hava premission `MANAGE_CHANNELS`:pleading_face: **')
  if(!prof.member.hasPermission('MANAGE_CHANNELS'))return prof.reply('**you dont hava`MANAGE_CHANNELS`Permission.!**')
  
  prof.channel.overwritePermissions([{
      id:prof.guild.id,
      deny:['SEND_MESSAGES'],
    }]).then(p=>{
        var professor = new Discord.MessageEmbed()
        prof.channel.send(`🔒丨**has been locked**`);
    })
  
    }
    if(prof.content.startsWith(prefix + 'unlock'))
    {
       if(!prof.guild.me.hasPermission('MANAGE_CHANNELS'))return prof.reply('**i dont hava premission `MANAGE_CHANNELS`:pleading_face: **')
  if(!prof.member.hasPermission('MANAGE_CHANNELS'))return prof.reply('**you dont hava`MANAGE_CHANNELS`Permission.!**')
  
  prof.channel.overwritePermissions([{
      id:prof.guild.id,
      allow:['SEND_MESSAGES'],
    }]).then(p=>{
        var professor = new Discord.MessageEmbed()
        prof.channel.send(`🔓丨**has been unlocked**`);
    })
  
    }
  
  
})

//////

const rast = "";
const rastw = "";
const ghallat = "❌";
const ghallatw = "";
const logosec = "";
const warn = "⚠";
const color = "#11e9ed";
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (!message.member.hasPermission("Ownership")) return;
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**🔄 | Changed To : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**🔄 | Changed To : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**🔄 | Changed To : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**🔄 | Changed To : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**🔄 | Changed To : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**🔄 | Changed To : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `**🔄 | Changed To : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        chaCrLimit: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file



////////

client.on('message', message => { 
    if (message.content.startsWith(`${prefix}bot`)) {
      const tnx = new Discord.MessageEmbed()
.setAuthor(client.user.username,client.user.avatarURL())
.setThumbnail(`https://cdn.discordapp.com/attachments/771100905285484571/798636546882142208/image0.png`)
.setColor("#11e9ed")
.setTitle(`Info about ${client.user.username}.`)
.addField('**My Ping**' , `${Date.now() - message.createdTimestamp}` + 'MS', true)
.addField('**Ram Usage**', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
.addField('**Servers**', `[ ${client.guilds.cache.size} ]`, true)
.addField('**Channels**', `[ ${client.channels.cache.size} ]`, true)
.addField('**Users**', `[ ${client.users.cache.size} ]`, true)
.addField('**My Name**' , `[ ${client.user.tag} ]` , true)
.addField('**My ID**' , `[ ${client.user.id} ]` , true)
.addField('**DiscordJS**' , `[ ${Discord.version} ]` , true)
.addField('**NodeJS**' , `[ ${process.version} ]` , true)
.addField('**Bot-Owners**' , `[MrZalm , Xalo Ramis]` , true)
.addField('**My Prefix**' , `[ ${prefix} ]` , true)
.addField('**My Language**' , `[ Java Script ]` , true)
.setFooter('Security')

message.channel.send(tnx)
} 
});

///////

client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`**Deleted ${m.size} messages**`)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`**Deleted ${m.size} messages**`)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});
////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("**You cant send everyone.**");
  }
});

////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("**You cant send here.**");
  }
});

////////

client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**❌ | You don't have Permissions do to this.**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("**❌ | Member not found!**");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`**❌ | You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `**❌ | You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `**❌ | I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `**❌ | Specified user is not ${mode}able.**`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${mode == "ban" ? "Bann" : mode}ed __${
            user.user.tag
          }__ (ID: \`${user.user.id}\`)**`
        )
      )
      .catch(console.error);
  }
});

////////

client.on("message", professor => {
  if (professor.content.startsWith(prefix + "anti bot on")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antibots[professor.guild.id] = {
      onoff: "On"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setThumbnail(
        `https://cdn.discordapp.com/attachments/755636694035857438/777992625349197824/1.png`
      )
      .setColor("#11e9ed")
      .setTitle("AntiBot On")
      .setDescription(`The AntiBots Join Is On  | By <@${professor.author.id}>`)
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("🟢");
    });
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", professor => {
  if (professor.content.startsWith(prefix + "anti bot off")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antibots[professor.guild.id] = {
      onoff: "Off"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setThumbnail(
        `https://cdn.discordapp.com/attachments/755636694035857438/777992625092427786/2.png`
      )
      .setColor("#11e9ed")
      .setTitle("AntiBot Off")
      .setDescription(
        `The AntiBots Join Is Off  | By <@${professor.author.id}>`
      )
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("🔴");
    });
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});


///////

client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "say") {
    if (!message.guild) return;
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      return message.reply("**You Dont Have `MANAGE_MESSAGES` Permission .**");
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "Please Check My Role Permission To `MANAGE_MESSAGES`"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "say <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor("#11e9ed")
      .setDescription(`${args}`)
      .setFooter(`By ${message.author.tag}`);
    message.channel.send(embed);
  }
});


///////

const Dev = "769956996476043275";
client.on("message", msg => {
  if (msg.content.startsWith(prefix + "setavatar")) {
    if (!Dev.includes(msg.author.id))
      return msg.channel.send("you are not owner this Bot ❌");
    var args = msg.content
      .split(" ")
      .slice("1")
      .join(" ");
    client.user.setAvatar(args);
    msg.channel.send("image is change ✔️");
  }
});

/////////

////

client.on('message', message => {
   if(message.channel.type === 'DM') return;
   if(message.content.toLowerCase() === prefix + 'banlist') {
    let banslist = []
    message.guild.fetchBans().then(banned  => {
      let list = banned.map(user => user.user.tag).join('\n');
 
 
 
     let embed = new Discord.MessageEmbed()
     .setAuthor(message.author.username , message.author.displayAvatarURL())
     .setDescription(`${banned.size} users are banned:**\n ${list}`)
 .setColor('11e9ed')
 
message.channel.send(embed)
});
 
   }
 })

////////


//////

client.on('message', message => {
 
     if(message.content.startsWith(prefix + "warn")) {
 let args = message.content.split(" ").slice(1);
if(!message.member.hasPermission("OWNERSHIP")) return message.reply('you dont have a Permission')
 
    var user = message.mentions.users.first();
    var rn = args.slice(1).join(' ');
  let em =new Discord.MessageEmbed()
  .setTitle('Error :')
  .setColor('11e9ed')
  .setDescription(`
  **Usage:**
 ${prefix}warn (user) (reason)

  **Ex :**
  ${prefix}warn ${message.author} 
  ${prefix}warn ${message.author}  test
 
  `)
  .setAuthor(message.author.username
  ,message.author.avatarURL())
    if(!user) return message.channel.send(em)


 let ffg = new Discord.MessageEmbed()
  .setColor("#E40004")
  .setTimestamp()
  .setTitle('Warned!')
  .setDescription(`


 warned by  : ${message.author.username}
 reason     : ${rn}


  `)
  .setAuthor(message.author.username
  ,message.author.avatarURL())
  .setFooter(``);
    message.channel.send(ffg);
    user.send(ffg)
    message.delete();
}
});

//////

const Antispam = require ("discord-anti-spam")
const AntiSpam = new Antispam({
  warnThreshold: 4, // Amount of messages sent in a row that will cause a warning.
  banThreshold: 12, // Amount of messages sent in a row that will cause a ban
  maxInterval: 2000, // Amount of time (in ms) in which messages are cosidered spam.
  warnMessage: "{@user}, Please Stop This Spam!.", // Message will be sent in chat upon warning.
  banMessage: "**{user_tag}** a ete ban pour spam.", // Message will be sent in chat upon banning.
  maxDuplicatesWarning: 7, // Amount of same messages sent that will be considered as duplicates that will cause a warning.
  maxDuplicatesBan: 15, // Amount of same messages sent that will be considered as duplicates that will cause a ban.
  deleteMessagesAfterBanForPastDays: 2, // Amount of days in which old messages will be deleted. (1-7)
  ignoreBots: false, // Ignore bot messages
  verbose: false, // Extended Logs from module
  });
  
  AntiSpam.on("warnEmit", (member) => console.log(`Attempt to warn ${member.user.tag}.`));
  AntiSpam.on("warnAdd", (member) => console.log(`${member.user.tag} a ete warn.`));
  AntiSpam.on("kickEmit", (member) => console.log(`Attempt to kick ${member.user.tag}.`));
  AntiSpam.on("kickAdd", (member) => console.log(`${member.user.tag} a ete kick.`));
  AntiSpam.on("banEmit", (member) => console.log(`Attempt to ban ${member.user.tag}.`));
  AntiSpam.on("banAdd", (member) => console.log(`${member.user.tag} a ete ban.`));
  AntiSpam.on("dataReset", () => console.log("Module cache has been cleared."));
  
  client.on("ready", () => console.log(`Logged in as.`));
  
  client.on("message", (msg) => {
  AntiSpam.message(msg);
  });

/////////

client.on('message', prof =>
{
    if(prof.content.startsWith(prefix + 'user')) {
        var professor = new Discord.MessageEmbed()
        .setThumbnail(prof.author.avatarURL())
        .setColor('11e9ed')
        .setTitle('Your Info User.')
        .addField('> **Your Name**', `<@${prof.author.id}>`)
        .addField('> **Your ID**', `${prof.author.id}`)
        .addField('> **Create User**',prof.author.createdAt.toLocaleString())
        prof.channel.send(professor);
    }
})

//////

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.channel.send(`**Time taken: ${PinG} ms.**`);
    });
  }
});

/////

client.on('message', message => {
 //
if(message.content.startsWith(prefix + "server")){ 
    var EMBED = new Discord.MessageEmbed()
    .setTitle("server info") 
    .addField("🔖server name", `${message.guild.name}`)
    .addField("🆔server id", `${message.guild.id}`)
    .addField("👑server owner", `${message.guild.owner}`)
    .addField("👥members", `${message.guild.memberCount}`)
    .addField("🌀Server roles", `${message.guild.roles.cache.size}`)
    .addField("🎙server channels", `${message.guild.channels.cache.size}`)
    .addField("🌍server region", `${message.guild.region}`)
.addField("📆created in", `${message.guild.createdAt.toLocaleString()}`)
.addField("🔸Boost", `${message.guild.premiumSubscriptionCount}`)


.setColor("#11e9ed")
.setFooter(`Requsted by ${message.author.username}`)
    message.channel.send(EMBED)
  }
})

/////

client.on('message', async message => {
	if(message.author.bot || message.channel.type === 'dm') return;
	let messageArray= message.content.split(" ")
	let args = messageArray.slice(1);
	let cmd  = messageArray[0];
	if(cmd === prefix + 'ban') {
		let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0])
		if(!message.member.hasPermission('BAN_MEMBERS')) return;
		if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('I need ``BAN_MEMBERS`` permission ')
		const reason = args[1] || "there was no reason";
		toBan.ban({
			reason: reason
			})
		        message.channel.send(`${toBan} banned from the server! ✈️ \nReason: ${reason}`)
			}
			if(cmd === prefix + 'unban') {
				let toBan = await client.users.fetch(args[0])
				if(!message.member.hasPermission('BAN_MEMBERS')) return;
		if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('I need ``BAN_MEMBERS`` permission ')
			        message.guild.members.unban(toBan)
			        message.channel.send(`${toBan} has been unbanned from the server `)
				}
				});
/////

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send("**🟢 Unban all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**🟢 Unban this member ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**❓ - I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});
///////

client.on('message', message => {
  if(message.author.bot) return;
  var args = message.content.split(" ")
  if(args[0] === prefix + 'kick') {
if(!message.member.hasPermission('KICK_MEMBERS')) return;
    let user = message.mentions.members.first()
    if(!user) return;
    if(user.id === message.author.id) return message.reply('**will you cant kick your self**')
    if(!message.guild.member(user).bannable) return message.reply('**i cant kick this user**')
    var reason = (args[2])
    if(!reason) reason = 'No reason typed'
    user.kick()
var embed = new Discord.MessageEmbed()
    message.channel.send(`**${user.user.username} kicked** ✅`)
  }
})
///////

client.on("message", message => {
  
  if (message.content.includes("discord.gg")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      message.reply("**you can't send link**");
      message.react("🚫");
    }
  }
});

//////
client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#11e9ed",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//////
client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**removed mute from ${user.username}!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});

///////

client.on('message', async message => {
  if (message.author.bot) return
  if (!message.guild) return
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  if (command === prefix + "avatar") {
    let user = message.mentions.members.first().user || message.guild.members.cache.get(args[0]).user
    if (!user) user = message.author
    let embed = new Discord.MessageEmbed()
      .setTitle(`${user.username.endsWith(`'s`) ? user.username : user.username + "'s"} AVATAR`)
      .setImage(`${user.displayAvatarURL({ dynamic: true })}` + '?size=4096')
      .setTimestamp()
      .setColor("#11e9ed")
    message.channel.send(embed)
  }
})
       
//////

          
client.on("message", message => {
  if (message.content.startsWith(prefix + "love")) {
 const onetoonehundred = Math.floor(Math.random() * 100) 
 const usser = message.mentions.members.first()

 if(!usser) {
     const specify = new Discord.MessageEmbed()
     .setDescription('Please mention a user!')
     message.channel.send(specify)
 } else {

     if(usser.id === message.author.id) {
         const love2 = new Discord.MessageEmbed()
 .setTitle(`Love Rate :heart: `)
 .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic: true})}`)
 .setDescription(`${message.author} loves ${usser} 100% ❤️ 
 nah joke.`)
 message.channel.send(love2)
     } else {
 
 const love = new Discord.MessageEmbed()
 .setTitle(`Love Rate :heart: `)
 .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic: true})}`)
 .setDescription(`${message.author} loves ${usser} ${onetoonehundred}%`)
 .setColor("#11e9ed")
 message.channel.send(love)
 }
}
}
})

//////


client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "die")){
    let args = badboy.content.split(" ").slice(1).join(" ")
    if(!args) return badboy.reply("Please Mention Someone.")
let user = badboy.mentions.users.first();user.username

      if (user.id == badboy.author.id) return badboy.reply("You cannot use this command with yourself.")

if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
let die = [
 "https://media.tenor.com/images/751d6257579f90047c3eed57a642dd1c/tenor.gif"
  ];
 
    
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`${badboy.author.username}:skull: :skull_and_crossbones: ${user.username}  `)
    .setImage(`${die}`)
    
    .setFooter(`Requsted by ${badboy.author.username}`)
    .setColor("#11e9ed")
badboy.channel.send(embed)
  
  }
})

//////

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "vote")){
	if (badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only") 

let args = badboy.content.split(" ").slice(1).join(" ");
if(!args) return badboy.reply("type your vote")
    var embed = new Discord.MessageEmbed()
   
    .setDescription(`${args}`)
 .setColor("#11e9ed")
 badboy.channel.send(embed).then(badboy => {
   badboy.react("👍")
badboy.react("👎")
 })
  }
})

var top = require("./top.json");
function save() {
  fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
  if (newMember.author.bot) return;
  if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
  if (!top[newMember.guild.id][newMember.user.id])
    top[newMember.guild.id][newMember.user.id] = {
      text: 0,
      voice: parseInt(Math.random() * 10),
      msgs: 0,
      id: newMember.user.id
    };
  save();
  if (!oldMember.voiceChannel && newMember.voiceChannel) {
    var addXP = setInterval(async function() {
      top[newMember.guild.id][newMember.user.id].voice += parseInt(
        Math.random() * 4
      );
      save();
      if (!newMember.voiceChannel) {
        clearInterval(addXP);
      }
    }, 60000);
  }
});
client.on("message", async function(message) {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!top[message.guild.id]) top[message.guild.id] = {};
  if (!top[message.guild.id][message.author.id])
    top[message.guild.id][message.author.id] = {
      text: parseInt(Math.random() * 10),
      voice: 1,
      msgs: 0,
      id: message.author.id
    };
  if (top[message.guild.id][message.author.id].msgs > 10) {
    top[message.guild.id][message.author.id].text += parseInt(
      Math.random() * 4
    );
    top[message.guild.id][message.author.id].msgs = 0;
  }
  save();
  var args = message.content.split(" ");
  var cmd = args[0].toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "top text")) {
    var topArray = Object.values(top[message.guild.id]);
    var num = 0;
    var textStr = `${topArray
      .sort((a, b) => b.text - a.text)
      .slice(0, 5)
      .filter(user => user.text > 0 && message.guild.members.cache.get(user.id))
      .map(function(user) {
        if (user.text > 0) {
          return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`;
        }
      })
      .join("\n")}`;
    var embed = new Discord.MessageEmbed()
      .setAuthor("📑| Guild Score Leaderboards", message.guild.iconURL())
      .setColor("13B813")
      .addField(
        `**:speech_balloon: | TEXT LEADERBOARD**`,
        `${textStr}   \n\n\n **? |  More info: \`${prefix}top text\`**`,
        true
      )
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp();
    message.channel.send({
      embed: embed
    });
    //   if (!message.content.startsWith(prefix)) return;
  } else {
    if (message.content.startsWith(prefix + "top voice")) {
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var voiceStr = `${topArray
        .sort((a, b) => b.voice - a.voice)
        .slice(0, 5)
        .filter(
          user => user.voice > 0 && message.guild.members.cache.get(user.id)
        )
        .map(function(user) {
          if (user.voice > 0) {
            return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`;
          }
        })
        .join("\n")}`;
      var embed = new Discord.MessageEmbed()
        .setAuthor("📑 | Guild Score Leaderboards", message.guild.iconURL())
        .setColor("#11e9ed")
        .addField(
          `**:microphone2: | VOICE LEADERBOARD**`,
          `${voiceStr}   \n\n\n **:sparkles: More info ** \`${prefix}top voice\``,
          true
        )

        .setFooter(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp();
      message.channel.send({
        embed: embed
      });
    } else {
      if (message.content.startsWith(prefix + "reset voice")) {
        if (!message.member.hasPermission("MANAGE_GUILD"))
          return message.channel.send(`you don have MANAGE_SERVER`);
        var reset = ":white_check_mark: successfully reset voice ";
        var confirm = "YES:✅    NO:❎";

        message.channel.send(`**${confirm}**`).then(async msg => {
          await msg.react("✅");
          await msg.react("❎");
          const doma = msg.createReactionCollector(
            (reaction, user) =>
              reaction.emoji.name === "✅" && user.id === message.author.id,
            { time: 60000 }
          );
          const ziad = msg.createReactionCollector(
            (reaction, user) =>
              reaction.emoji.name === "❎" && user.id === message.author.id,
            { time: 60000 }
          );
          doma.on("collect", async r => {
            msg.delete();

            msg.channel.send(`${reset}`);
          });

          ziad.on("collect", async r => {
            msg.delete();
          });
        });

        // break;
        if (!message.content.startsWith(prefix)) return;
      } else {
        if (message.content.startsWith(prefix + "top")) {
          var topArray = Object.values(top[message.guild.id]);
          var num = 0;
          var textStr = `${topArray
            .sort((a, b) => b.text - a.text)
            .slice(0, 10)
            .filter(
              user => user.text > 0 && message.guild.members.cache.get(user.id)
            )
            .map(function(user) {
              if (user.text > 0) {
                return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`;
              }
            })
            .join("\n")}`;
          num = 0;
          var voiceStr = `${topArray
            .sort((a, b) => b.voice - a.voice)
            .slice(0, 10)
            .filter(
              user => user.voice > 0 && message.guild.members.cache.get(user.id)
            )
            .map(function(user) {
              if (user.voice > 0) {
                return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`;
              }
            })
            .join("\n")}`;
          var embed = new Discord.MessageEmbed()
            .setAuthor("📑| Guild Score Leaderboards", message.guild.iconURL())
            .addField(
              "**TOP 5 TEXT :speech_balloon:**",
              `${textStr}  \n\n  **:sparkles: More info** \`${prefix}top text\``,
              true
            )
            .addField(
              "**TOP 5 VOICE :microphone2:**",
              `${voiceStr} \n\n **:sparkles: More info** \`${prefix}top voice\``,
              true
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("13B813");
          message.channel.send({ embed: embed });
        }
      }
    }
  }
});
////////
const rcrank = JSON.parse(fs.readFileSync("rcrank.json", "utf8")); 

client.on('message', LORD => {

if (!rcrank[LORD.author.id])
 rcrank[LORD.author.id]={points:0,level:0,nextLvlXp:200};

if (LORD.author.bot) return;

rcrank[LORD.author.id].points = Math.floor(rcrank[LORD.author.id].points + 1); 

if (rcrank[LORD.author.id].nextLvlXp <= rcrank[LORD.author.id].points) {

rcrank[LORD.author.id].level = Math.floor(rcrank[LORD.author.id].level + 1);

rcrank[LORD.author.id].nextLvlXp = Math.floor(rcrank[LORD.author.id].points * 20);

LORD.channel.send(`**${LORD.author.username}, You leveld up to __${rcrank[LORD.author.id].level}__**`);

};

fs.writeFile('rcrank.json', JSON.stringify(rcrank), (err) => {  

if (err) console.error(err);

});

})  // coded BY LORD

client.on("message", async LORD => {

if (LORD.author.bot) return; 

if(!LORD.channel.guild) return;

if (LORD.content.startsWith(prefix + "rank")) {

var ment = LORD.mentions.users.first();

var getvalueof;  

if(ment) {getvalueof = ment;}else{getvalueof = LORD.author;}

if(getvalueof.id === client.user.id) {return LORD.channel.send("😉 | I am on level 100")}  // coded by LORD

if(getvalueof.bot) {return LORD.channel.send("Bot not have levels")}

if (!rcrank[getvalueof.id]) rcrank[getvalueof.id] = {points: 0, level: 1,nextLvlXp:200};

let embed = new MessageEmbed()  // coded by LORD

.setColor("#11e9ed")

.setThumbnail(getvalueof.avatarURL())

.setAuthor(getvalueof.username)  

.setDescription(`**LEVEL** - ${rcrank[getvalueof.id].level}
**XP** - ${rcrank[getvalueof.id].points}/${rcrank[getvalueof.id].nextLvlXp}`)   // coded by LORD

 LORD.channel.send(embed)

}  

});
//////


client.on("message", message => {
  if (message.content.startsWith(prefix + "roles")) {
 let rolemap = message.guild.roles.cache
 .sort((a, b) => b.position - a.position)
 .map(r => r)
 .join(",");
 if (rolemap.length > 1024) rolemap = "To many roles to display";
 if (!rolemap) rolemap = "No roles";
const embed = new Discord.MessageEmbed()
.addField("Role List" , rolemap)
.setColor("#11e9ed")
message.channel.send(embed);
}
})

/////

client.on(`message`, zalm => {
    if (zalm.content.startsWith(prefix + "slap")) {
       if (!zalm.channel.guild) return zalm.channel.send('**This command is for servers only**');
     var zalmslap = zalm.mentions.members.first()
 
     if(!zalm.mentions.members.first()) return zalm.channel.send(`**Please mention someone**`);
     var zalmembed = new Discord.MessageEmbed()
      .setTitle('')
      .setURL(``)
      .setDescription(`${zalm.author} Slapped ${zalmslap} 😂`)
      .setImage(`https://media.giphy.com/media/P1EomtpqQW34c/giphy.gif`)
      
      .setColor("#11e9ed"); 
      zalm.channel.send(zalmembed);
}
});
///////
client.on(`message`, zalm => {
    if (zalm.content.startsWith(prefix + "kill")) {
       if (!zalm.channel.guild) return zalm.channel.send('**This command is for servers only**');
     var zalmkill = zalm.mentions.members.first()
 
     if(!zalm.mentions.members.first()) return zalm.channel.send(`**Please mention someone**`);
     var zalmembed = new Discord.MessageEmbed()
      .setTitle('')
      .setURL(``)
      .setDescription(`${zalm.author} killed ${zalmkill} 🔫`)
      .setImage(`https://media.giphy.com/media/9tXn7DEOsjifNDEenF/giphy.gif`)
      
      .setColor("#11e9ed"); 
      zalm.channel.send(zalmembed);
}
});
///////

client.on('message', message => {
   if(message.content.startsWith(prefix + "uinvites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} Your invites ${inviteCount}.`);
});
  }
});
///////
client.on('message', message => {
if(message.content.startsWith(`${prefix}fruits`)) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
    client[client.id].points++;
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

//////
client.on('message', james => {
      if(james.content === prefix + "hide") {
      if(!james.channel.guild) return;
      if(!james.member.hasPermission('MANAGE_CHANNELS')) return james.reply('You Dont Have Perms ❌');
             james.channel.overwritePermissions(james.guild.id, {
             READ_MESSAGES: false
 })
              james.channel.send('Channel Hided Successfully ! ✅  ')
 }
});
client.on('message', james => {
      if(james.content === prefix + "show") {
      if(!james.channel.guild) return;
      if(!james.member.hasPermission('MANAGE_CHANNELS')) return james.reply('❌');
             james.channel.overwritePermissions(james.guild.id, {
             READ_MESSAGES: true
 })
              james.channel.send('Done')
 }
})
