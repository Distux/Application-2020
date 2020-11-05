module.exports = {
	name: '8ball',
    description: 'Ask a question and I, Karen, will divine an answer from Madokami for your question!',
    aliases: ['8b'],
	execute(msg, args) {
		var temp = Math.floor((Math.random() * 20) + 1);
		switch (temp) {
			case 1: msg.channel.send('It is certain.'); break;
			case 2: msg.channel.send('It is decidedly so.'); break;
			case 3: msg.channel.send('Without a doubt.'); break;
			case 4: msg.channel.send(' Yes – definitely.'); break;
			case 5: msg.channel.send('Signs point to yes.'); break;
			case 6: msg.channel.send('You may rely on it.'); break;
			case 7: msg.channel.send('As I see it, yes.'); break;
			case 8: msg.channel.send('Outlook good.'); break;
			case 9: msg.channel.send('Yes.'); break;
			case 10: msg.channel.send('Most likely.'); break;
			case 11: msg.channel.send('Reply hazy, try again.'); break;
			case 12: msg.channel.send('Ask again later.'); break;
			case 13: msg.channel.send('Better not tell you now.'); break;
			case 14: msg.channel.send('Cannot predict now.'); break;
			case 15: msg.channel.send('Concentrate and ask again.'); break;
			case 16: msg.channel.send("Don't count on it."); break;
			case 17: msg.channel.send('My reply is no.'); break;
			case 18: msg.channel.send('My sources say no.'); break;
			case 19: msg.channel.send('Outlook not so good.'); break;
			default: msg.channel.send('Very doubtful.'); break;
		}
	},
};