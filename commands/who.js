module.exports = {
	name: 'who',
    description: 'who am i? who are you? Karen can tell you.',
    args: true,
    usage: "[am i?, are you?]",
	execute(msg, args) {
		if (args == "am,i?" || args == "am,I?") {
			msg.channel.send('You are Karen.');
		}
		else if (args == "are,you?") {
			msg.channel.send('I am Karen.');
		}
	},
};