module.exports = {
	name: 'link',
    description: 'links to either vex or dnd~!',
    args: true,
    usage: ["[vex or dnd]"],
	execute(msg, args, Discord) {
		if (args == "vex") {
			msg.channel.send('https://www.vexforum.com/');
		}
		else if (args == "dnd") {
			msg.channel.send('http://online.anyflip.com/ofsj/cxmj/mobile/index.html');
		}
	},
};