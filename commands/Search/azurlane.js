//const {AzurLane} = require("azurlane");
//const azurlane = new AzurLane();
const Discord = require("discord.js");
const func = require("../../function.js");
const db = require("../../db.js");
var request = require('request');
module.exports = {
    name: "azurlane",
    category: "Search",
    description: "Returns Informations Character of Azur Lane.",
    run: async(_client, message, args) => {
        return func.Error(message, "This Command has been Disabled.");
        const prefix = await db.GuildInfo(message.guild.id, "prefix");
        if(!args[0]) {
            const embed = new Discord.RichEmbed()
            .setAuthor("Command Help.")
            .setDescription("<> - Required | [] - Optional")
            .addField(""+prefix+"azurlane <Type> <Character>", "\n**Guides:**\n- Type: \n`Name` - Get by Name.\n`ID` - Get by ID.\n- Character: Follow with Type.")
            .setColor("#00FFFF");
            return message.channel.send(embed);
        }

        let c;
        if(args[0].toLowerCase() == "name"){
            if(!args[1]) return func.Error(message, "Character is Missing.");
            c = await azurlane.getShipByName(args.slice(1).join(" ")).catch( err => {
                return func.Error(message, "Character Name `"+args.slice(1).join(" ")+"` not Found.");
            });
        }
        else if(args[0].toLowerCase() == "id"){
            if(!args[1]) return func.Error(message, "Character is Missing.");
            let id = `${args.slice(1).join(" ")}`;
            if(isNaN(id)) return func.Error(message, "Character must be Number if Type is ID.");
            if(id.length == 1) {id = `00${id}`;}
            if(id.length == 2) {id = `0${id}`;}
            c = await azurlane.getShipById(id).catch( err => {
                return func.Error(message, "Character ID `"+args.slice(1).join(" ")+"` not Found.");
            });
        }
        else return func.Error(message, "Only accept Type as `Name` or `ID`.");
        
        
        const embed = new Discord.RichEmbed()
        .setAuthor(`Character Informations.`)
        .setThumbnail(c.thumbnail)
        .setDescription(`ID: ${c.id}\nEN: ${c.names.en}\nJP: ${c.names.jp}\nBuild Time: ${c.buildTime}\nRarity: ${c.rarity}\nStar(s): ${c.stars.value}\nClass: ${c.class}\nNationality: ${c.nationality}\nHull Type: ${c.hullType}`)
        .setColor("#00FFFF")
        .setTimestamp()
        .setFooter("Powered by AzurLane");

        await message.channel.send(embed).catch(()=>{});
    }
}