module.exports = {
	name: 'prefix',
	description: 'My prefix is [Karen ]!',
	execute(msg, args, Discord) {
		msg.reply(`you can either ping me (if you're rude) or use \`${prefix}\` as my prefix.`);
	},
};