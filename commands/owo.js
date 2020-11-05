module.exports = {
	name: 'owo',
    description: 'Karen replies with a owo or a uwu of her own',
    aliases: ['Owo', 'OwO', 'OWO', 'owO', 'uwu', 'uwU', 'Uwu', 'UwU', 'UWU'],
	execute(msg, args) {
		var temp = Math.floor((Math.random() * 4) + 1);
		if (temp == 1) {
			msg.channel.send('owo');
		} else if (temp == 2) { 
			msg.channel.send('uwu');
		} else if (temp == 3) {
			msg.channel.send('OwO');
		} else {
			msg.channel.send('UwU');
		}
	},
};