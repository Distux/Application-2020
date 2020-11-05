const fs = require('fs');

module.exports = {
	name: 'write',
	description: 'write in json file?!',
	execute(msg, args, client) {
		editedmessage = msg.content.slice(12);
		client.msgs [msg.author.id] = {
			msg:  editedmessage
		}
		fs.writeFile("./msgs.json", JSON.stringify (client.msgs, null, 4), err => {
			if(err) throw err;
			msg.channel.send("You have been recorded muahahahah.");
		});
	},
};