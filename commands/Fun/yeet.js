const Discord = require("discord.js");

module.exports = {
    name: "yeet",
    category: "Fun",
    description: "Returns Yeet Message.",
    run: async(_client, message, args) => {
        await message.channel.send("YA YEET!!!!");
    }
}