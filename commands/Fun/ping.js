

exports.run = (client, msg) => {
  if (msg.content == “ping”) {
   let startTime = Date.now();
    msg.reply("`Pinging...`").then(msg => 
      msg.edit(":ping_pong: Pong! Took `" + Math.round(Date.now() - startTime) + " ms`!")
	  
    )
  }
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: “ping”,
  description: “Gives back the bot’s ping”,
  usage: "<query:str>",
  usageDelim: "",
  type: "command",
};