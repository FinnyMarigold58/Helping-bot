const client = require("nekos.life");
const nekoslife = new client();
const func = require("../../function.js");
const Discord = require("discord.js");

module.exports = {
    name: "feed",
    category: "Fun",
    description: "Returns Feed Gif someone to someone.",
    run: async(_client, message, args) => {
        if(!args[0]) return func.Error(message, "You must choose User to Feed.");
        const getuser = func.getMember(message, args.join(" "));
        if(!getuser) return func.Error(message, "User not Found.");
        
        const feed = await nekoslife.sfw.feed();
        const embed = new Discord.RichEmbed()
        .setDescription(`Hey ${getuser.toString()}, ${message.author.toString()} Fed you!`)
        .setImage(feed.url)
        .setTimestamp()
        .setFooter("Powered by nekos.life")
        .setColor("#FF33FF");
        await message.channel.send(embed)
    }
}