module.exports = {
	name: 'why',
	description: 'why!',
	execute(msg, args) {
		var temp = Math.floor((Math.random() * 4) + 1);
		if (temp == 1) {
			msg.channel.send('42');
		} else if (temp == 2) {
			msg.channel.send('Because Turtles.');
		} else if (temp == 3) {
			msg.channel.send('Because digital apples.');
		} else {
			msg.channel.send('Does it matter?');
		}
	},
};