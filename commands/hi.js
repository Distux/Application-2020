//const { footer } = require('../config.json');

module.exports = {
	name: 'hi',
	description: 'Hi!',
	execute(msg, args, Discord) {
        const embed = new Discord.MessageEmbed()
        .setAuthor('Karen ze First','https://cdn.discordapp.com/attachments/481240992624934924/750895898669875301/Ace.png')
      	.setTitle('Hi~')
      	.setColor("a6c7e5")
        .setImage('https://cdn.discordapp.com/attachments/481240992624934924/750891031259644066/karen_wave.gif')
        //.setFooter(footer)
    	msg.channel.send(embed)
	},
};