const Discord = require("discord.js");

module.exports = {
    name: "rps",
    category: "Fun",
    description: "Returns Random RPS Message.",
    run: async(_client, message, args) => {
        if(!args[0]) return message.channel.send("Command usage: ``rps <Rock/Scissors/Paper>``");
        const botpick = ["Rock","Paper","Scissors"];
        let player = args[0];
        const bot = botpick[Math.floor(Math.random() * botpick.length)];
        
        message.channel.send(`You choose ${player}. I choose ${bot}.`);
    }
}