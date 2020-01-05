const Discord = require("discord.js");
const crypto = require("crypto");

module.exports = {
    noPerm: function(message, perm){
        const embed = new Discord.RichEmbed()
        .addField("Error!", "This command require permissions: `"+perm+"`.")
        .setColor("#FF0000");
        return message.channel.send(embed);
    },

    Error: function(message, perm){
        const embed = new Discord.RichEmbed()
        .addField("Error!", ""+perm+"")
        .setColor("#FF0000");
        return message.channel.send(embed);
    },

    noPremium: function(message){
        const embed = new Discord.RichEmbed()
        .addField("Error!", "This command require: `Guild Premium`.")
        .setColor("#FF0000");
        return message.channel.send(embed);
    },

    randomHex: function(n){
        if (n <= 0) {
            return '';
        }
        var rs = '';
        try {
            rs = crypto.randomBytes(Math.ceil(n/2)).toString('hex').slice(0,n);
            /* note: could do this non-blocking, but still might fail */
        }
        catch(ex) {
            /* known exception cause: depletion of entropy info for randomBytes */
            console.error('Exception generating random string: ' + ex);
            /* weaker random fallback */
            rs = '';
            var r = n % 8, q = (n-r)/8, i;
            for(i = 0; i < q; i++) {
                rs += Math.random().toString(16).slice(2);
            }
            if(r > 0){
                rs += Math.random().toString(16).slice(2,i);
            }
        }
        return rs;
    },

    formatDate: function(date){
        return new Intl.DateTimeFormat("en-US").format(date);
    },

    getMember: function(message, toFind = ''){
        toFind = toFind.toLowerCase();

        let target = message.guild.members.get(toFind);

        if(!target && message.mentions.members)
            target = message.mentions.members.first();

        if(!target && toFind){
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }

        if(!target)
            target = null;

        return target;
    },

    Loi: function(message, whaterror){
        const embed = new Discord.RichEmbed()
        .addField("Lỗi!", ""+whaterror+"")
        .setColor("#FF0000");
        return message.channel.send(embed);
    },

    HeThong: function(message, whatmsg){
        const embed = new Discord.RichEmbed()
        .addField("Hệ Thống!", ""+whatmsg+"")
        .setColor("#00FF00");
        return message.channel.send(embed);
    },

}