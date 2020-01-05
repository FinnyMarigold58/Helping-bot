const Discord = require("discord.js");
module.exports = {
    name: "botinfo",
    category: "Info",
    description: "Return Informations of PWDE.",
    run: async(_client, message, args) => {
        const finny = "263472056753061889";
        const finnys = _client.users.get(finny);
        const botcreatedAt = `${_client.user.createdAt}`.replace("GMT+0000 (UTC)", "");
        const embed = new Discord.RichEmbed()
        .setAuthor("PWDE's Informations.")
        .setThumbnail(_client.user.avatarURL)
        .addField("Full Name", _client.user.tag, true)
        .addField("Created On", botcreatedAt, true)
        .addField("Using Libary", "Discord.js", true)
        .addField("Watching", `On ${_client.guilds.size} Servers`, true)
        .addField("Listening", `To ${_client.users.filter( u => !u.bot).size} Users.`, true)
        .setFooter(`Dev by ${finnys.tag}`, finnys.avatarURL)
        .setColor("#FF33FF");
        return message.channel.send(embed);
    }
}