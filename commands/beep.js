module.exports = {
	name: 'beep',
	description: 'Karen will respod with beep!',
	execute(msg, args) {
		msg.channel.send('Boop.');
	},
};