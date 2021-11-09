
module.exports = {
    name: 'f1c1A',
    description: 'Gasp',
    aliases: ["f1c1a"],
    execute(msg, args) {
        msg.channel.send('Pong.');
        const role = msg.guild.roles.cache.find(role => role.name === 'Floor 2 C 2');
        //const member = msg.guild.members.cache.find(member => member.id === msg.author.id);
        const member = msg.mentions.members.first();
        if (member.id == msg.author.id) {
            member.roles.add(role);
        }
        else{
            msg.channel.send("Please only mention yourself after the command.")
        }
    },
 };