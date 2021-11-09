//const Discord = require('discord.js');

module.exports = {
	name: 'hos',
	description: 'GOOODBYE!!!',
	cooldown: 1,
	args: false,
	usage: '[answer]',
	execute(msg, args) {

		msg.delete({ timeout: 1000 })
		const role = msg.guild.roles.cache.find(role => role.name === "Floor 6 C1");
		const member = msg.guild.member(msg.author);
		member.roles.add(role);
		msg.channel.send(`Correct! Remember to use the server for floor 6's tests, ${msg.author}!`);
		member.roles.remove(msg.guild.roles.cache.find(role => role.name === "Hint 1"));
		member.roles.remove(msg.guild.roles.cache.find(role => role.name === "Hint 2"));
		member.roles.remove(msg.guild.roles.cache.find(role => role.name === "Hint 3"));

	},
};


