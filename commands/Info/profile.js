const Discord = require("discord.js");
const db = require("../../db.js");
const func = require("../../function.js");
module.exports = {
    name: "profile",
    category: "Help",
    description: "Returns User's Profile.",
    run: async(_client, message, args) => {
        return func.Error(message ,"This feature is Coming Soon.");
    }
}