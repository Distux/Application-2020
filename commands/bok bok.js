module.exports = {
	name: 'null',
	description: 'Karen will respod with Pong!',
	execute(msg, args) {
		msg.channel.send('Pong.');
	},
};