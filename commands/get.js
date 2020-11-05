const fs = require('fs');

module.exports = {
	name: 'get',
	description: 'retrieve in json file!',
	execute(msg, args, Discord, client) {
		let retrieved = client.msgs[msg.author.id].msg; 
		msg.channel.send(retrieved);
	},
};