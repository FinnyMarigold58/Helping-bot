const client = require("nekos.life");
const nekoslife = new client();
const func = require("../../function.js");
const Discord = require("discord.js");

module.exports = {
    name: "kemonomimi",
    category: "Anime",
    description: "Show Kemonomimi Image.",
    run: async(_client, message, args) => {
        const kemonomimi = await nekoslife.sfw.kemonomimi();

        const embed = new Discord.RichEmbed()
        .setTitle("**Kemonomimi (*´∀`)♪**")
        .setImage(kemonomimi.url)
        .setTimestamp()
        .setFooter("Powered by nekos.life")
        .setColor("#FF33FF");
        await message.channel.send(embed)
    }
}