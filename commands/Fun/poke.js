const client = require("nekos.life");
const nekoslife = new client();
const func = require("../../function.js");
const Discord = require("discord.js");

module.exports = {
    name: "poke",
    category: "Fun",
    description: "Returns Poke Gif someone to someone.",
    run: async(_client, message, args) => {
        if(!args[0]) return func.Error(message, "You must choose User to Poke.");
        const getuser = func.getMember(message, args.join(" "));
        if(!getuser) return func.Error(message, "User not Found.");
        
        const poke = await nekoslife.sfw.poke();
        const embed = new Discord.RichEmbed()
        .setDescription(`Hey ${getuser.toString()}, ${message.author.toString()} Poked you!`)
        .setImage(poke.url)
        .setTimestamp()
        .setFooter("Powered by nekos.life")
        .setColor("#FF33FF");
        await message.channel.send(embed)
    }
}