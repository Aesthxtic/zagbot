module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    message.channel.setRateLimitPerUser(args[0])
    message.channel.send(`Η αργή λειτουργία είναι: ${args[0]}δευτερόλεπτα`)
}

module.exports.config = {
    name: "slowmode",
    aliases: []
}