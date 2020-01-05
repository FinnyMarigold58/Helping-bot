module.exports = {
    name: "stand",
    category: "Info",
    description: "Returns latency and API ping.",
    run: async(_client, message, args) => {
        const stand = ["Power","Waste","Desposal","Entity"];
      return message.channel.send(stand);
    }
}