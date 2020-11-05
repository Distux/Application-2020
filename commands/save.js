module.exports = {
	name: 'save',
    description: 'save',
	execute(msg, args, Discord) {
		var temp = Math.floor((Math.random() * 3) + 1);
		if (temp == 1) {
			msg.channel.send('Okay. Gimme a sec I need to finish dowloading some apples.');
		} else if (temp == 2) {
			msg.channel.send('No.');
		} else {
			msg.channel.send("I'll think about it.");
		}
	},
};
