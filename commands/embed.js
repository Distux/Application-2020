//const Discord = require('discord.js');

module.exports = {
	name: 'embed',
	description: 'GOOODBYE!!!',
	execute(msg, args, Discord) {
		const embed = new Discord.MessageEmbed()
      	// Set the title of the field
      	.setTitle('GOODBYE!')
      	// Set the color of the embed
      	.setColor(0xff0000)
      	// Set the main content of the embed
      	.setDescription('I LOVED YOU MAGIRECCO')
        .setImage('https://cdn.discordapp.com/attachments/481240992624934924/750791634182209647/welcome.gif')
          // Send the embed to the same channel as the message
    	msg.channel.send(embed);
	},
};


