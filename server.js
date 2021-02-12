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
client.login("NzExMzI4NTcwMzc0NjE5MjA3.XsBaWw.9TTPI6L1zzs2lS707a3kCXWydj4");
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
      .setThumbnail(message.author.avatarURL())
      .setTitle(`Click Here To Add : Anti Vandalism`)
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`) .setDescription(`

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


[Support](https://discord.gg/Z7JgEkGtak) - [Website](https://aerial-catkin-jumbo.glitch.me/) - [Vote](https://top.gg/bot/711328570374619207)

`);

    message.channel.send(help);
  }
});

///////

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
const logosec = "<:762E9CF485EF4B36AC0A5634A698F153:804633625944653855>";
const warn = "<:806579089543790592:807899226352517122>";
const color = "#000000";
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
   if (message.author.id !== message.guild.ownerID) return;
  if (message.content.startsWith(prefix + "anti ban")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].banLimit} **`
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
        `**${rast} | Changed To : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send("**" + ghallat + " | Only Type A `Number` .**");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
       `**${rast} | Changed To : ${config[message.guild.id].roleCrLimit}`);
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
          `**${rast} | Changed To : ${config[message.guild.id].chaCrLimit}`);
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
        `**${rast} | Changed To : ${config[message.guild.id].time}**`
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


//////

let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot on")) {
    if (!message.channel.guild) return;
   if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`AntiBot Is **Enable** | <:5A83C5019F2E4ACA9B84017C3E88099B:804633625874006026>`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot off")) {
    if (!message.channel.guild) return;
   if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`AntiBot Is **Disable** | <:1E90573CBC844AACA4B451B869CC2A1C:804633626028802068>`);
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
      onoff: "on"
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


//=================================[ ban & unban]==================================//

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
      return message.channel.send("🛬 Unban all members");
    }
    if (!args)
      return message.channel.send("Please Type the member ID / all");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`🛬 Unban this member ${m.username}`);
      })
      .catch(stry => {
        message.channel.send(
          `**❓ - I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});

//=======================//

client.on('message', message => {
 //
if(message.content.startsWith(prefix + "serverinfo")) { 
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    var EMBED = new Discord.MessageEmbed()
    .setTitle("**server info**") 
    .addField("**server name**", `${message.guild.name}`)
    .addField("**server id**", `${message.guild.id}`)
    .addField("**server owner**", `${message.guild.owner}`)
    .addField("**members**", `${message.guild.memberCount}`)
    .addField("**Server roles**", `${message.guild.roles.cache.size}`)
    .addField("**server channels**", `${message.guild.channels.cache.size}`)
    .addField("**server region**", `${message.guild.region}`)
.addField("**created in**", `${message.guild.createdAt.toLocaleString()}`)
.addField("**Boost**", `${message.guild.premiumSubscriptionCount}`)


.setColor("#000000")
.setFooter(`Requsted by ${message.author.username}`)
    message.channel.send(EMBED)
  }
})

//=================================[ userinfo ]=============================//

client.on('message', prof =>
{
    if(prof.content.startsWith(prefix + 'userinfo')) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
        var professor = new Discord.MessageEmbed()
        .setThumbnail(prof.author.avatarURL())
        .setColor('000000')
        .setTitle('Your Info User.')
        .addField('**Your Name**', `<@${prof.author.id}>`)
        .addField('**Your ID**', `${prof.author.id}`)
        .addField('**Joined Server At**',
          moment(prof.joinedAt).format("D/M/YYYY h:mm a"),
          true
        )
        .addField('**Create User**',prof.author.createdAt.toLocaleString())
        prof.channel.send(professor);
    }
})

//=================================[ kick ]=================================//

client.on('message', message => {
  if(message.author.bot) return;
  var args = message.content.split(" ")
  if(args[0] === prefix + 'kick') {
if(!message.member.hasPermission('KICK_MEMBERS')) return;
    let user = message.mentions.members.first()
    if(!user) return;
    if(user.id === message.author.id) return message.reply('will you cant kick your self')
    if(!message.guild.member(user).bannable) return message.reply('i cant kick this user')
    var reason = (args[2])
    if(!reason) reason = 'No reason typed'
    user.kick()
var embed = new Discord.MessageEmbed()
    message.channel.send(`${user.user.username} kicked ✈️`)
  }
})



//=================================[ botinfo ]==============================//

client.on('message', message => { 
    if (message.content.startsWith(`${prefix}botinfo`)) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
      const tnx = new Discord.MessageEmbed()
.setAuthor(client.user.username,client.user.avatarURL())
.setThumbnail(`https://cdn.discordapp.com/attachments/772758556848029727/802994883378806824/image0.jpg`)
.setColor("#000000")
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
.addField('**Bot-Owners**' , `[<@769956996476043275>]` , true)
.addField('**My Prefix**' , `[ ${prefix} ]` , true)
.addField('**My Language**' , `[ Java Script ]` , true)
.setFooter('Security')

message.channel.send(tnx)
} 
});


//=================================[ warn ]=================================//

client.on('message', message => {
 
     if(message.content.startsWith(prefix + "warn")) {
 let args = message.content.split(" ").slice(1);
if(!message.member.hasPermission("OWNERSHIP")) return message.reply('you dont have a Permission')
 
    var user = message.mentions.users.first();
    var rn = args.slice(1).join(' ');
  let em =new Discord.MessageEmbed()
  .setTitle('Error :')
  .setColor('808080')
  .setDescription(`
  **Usage:**
 ${prefix}warn (user) (reason)

  Ex :
  ${prefix}warn ${message.author} 
  ${prefix}warn ${message.author}  test
 
  `)
  .setAuthor(message.author.username
  ,message.author.avatarURL())
    if(!user) return message.channel.send(em)


 let ffg = new Discord.MessageEmbed()
  .setColor("#000000")
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



//=================================[ kick & ban ]================================//


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
        "❌ | You don't have Permissions do to this."
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("❌ | Member not found!");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`❌ | You can't ${mode} the owner!`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `❌ | You can't ${mode} people higher ranked than yourself!`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `❌ | I can't ${mode} people who are higher ranked than me!`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `❌ | Specified user is not ${mode}able.`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `✅ ${mode == "ban" ? "Bann" : mode}ed __${
            user.user.tag
          }__ (ID: \`${user.user.id}\`)`
        )
      )
      .catch(console.error);
  }
});


//////////////

let spread = JSON.parse(fs.readFileSync("./spread.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti problem off")) {
    if (!message.channel.guild) return;
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          
            "**Sorry , But You Dont Have `MANAGE_GUILD` Permission .**"
        );
    spread[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`AntiProblem Is **Disable** | <:1E90573CBC844AACA4B451B869CC2A1C:804633626028802068>`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "anti problem on")) {
    if (!message.channel.guild) return;
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          
            "**Sorry , But You Dont Have `MANAGE_GUILD` Permission .**"
        );
    spread[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`AntiProblem Is **Enable** | <:5A83C5019F2E4ACA9B84017C3E88099B:804633625874006026>`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("http")) {
    if (message.member.hasPermission("MANAGE_EMOJIS")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**You Dont Have \`MANAGE_EMOJIS\` Permission .**`
    );
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("@everyone")) {
    if (message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
   if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**You Dont Have \`MENTION_EVERYONE\` Permission .**`
    );
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("@here")) {
    if (message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**You Dont Have \`MENTION_EVERYONE\` Permission .**`
    );
  }
});

///////////////////////////
let antihack = JSON.parse(fs.readFileSync("./antihack.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti subversive")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry , But You Dont Have `MANAGE_GUILD` Permission .**"
      );
    if (!antihack[message.guild.id])
      antihack[message.guild.id] = {
        onoff: "Off"
      };
    if (antihack[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`AntiSubversive Is **Enable** | <:5A83C5019F2E4ACA9B84017C3E88099B:804633625874006026>`),
        (antihack[message.guild.id].onoff = "On")
      ];
    if (antihack[message.guild.id].onoff === "On")
      return [
        message.channel.send(`AntiSubversive Is **Disable** | <:1E90573CBC844AACA4B451B869CC2A1C:804633626028802068>`),
        (antihack[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./antihack.json", JSON.stringify(antihack), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

/////////

client.on("message", message => {
 if (message.content === prefix + "settings") {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
     if (message.author.id !== message.guild.ownerID) return;
    if (!message.channel.guild)
      return message.channel.send(
        "Sorry This Command Only For Servers."
      );
    let embed = new Discord.MessageEmbed()
      .setTitle("")
       
      .setURL("")
       
      .setDescription(


        `**Anti Ban Is** : <:709602528232341545:807899198175313921>
${config[message.guild.id].banLimit}
•••••
**Anti Kick Is** : <:709602528232341545:807899198175313921>
${config[message.guild.id].kickLimits}
•••••
**Anti ChannelD Is** : <:709602528232341545:807899198175313921>
${config[message.guild.id].chaDelLimit}
•••••
**Anti ChannelC Is** : <:709602528232341545:807899198175313921>
${config[message.guild.id].chaCrLimit}
•••••
**Anti RoleD Is** : <:709602528232341545:807899198175313921>
${config[message.guild.id].roleDelLimit}
•••••
**Anti RoleC Is** : <:709602528232341545:807899198175313921>
${config[message.guild.id].roleCrLimits}
•••••
**Anti Time Is** : <:709602528232341545:807899198175313921>
${config[message.guild.id].time}`

          )
      .setColor(color)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
});


//////////

client.on("message",message => {
  if(message.content.startsWith(prefix + "linkbot")) 
  message.channel.send("https://discord.com/api/oauth2/authorize?client_id=711328570374619207&permissions=8&scope=bot");
}

);

//////
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.mentions.has(client.user))
    {
    message.reply(`**My Prefix Is** : \`${prefix}\``)
    }
});

