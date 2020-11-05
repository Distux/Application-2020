module.exports = {
	name: 'food',
	description: 'Karen will respod with a food!',
    aliases: ['dinner', 'breakfast', 'lunch', 'meal'],
    execute(msg, args, Discord) {
		const foodList = [
			'eggs',
			'onigiri',
			'ramen',
			'pancakes'
        ]
        const foodImg = [
            'https://cdn.discordapp.com/attachments/481240992624934924/748052054005645402/eggs.gif',
            'https://cdn.discordapp.com/attachments/481240992624934924/748466211318399036/onigiri.gif',
            'https://cdn.discordapp.com/attachments/481240992624934924/748053028279419050/ramen.gif',
            'https://cdn.discordapp.com/attachments/481240992624934924/750829266018500649/pancakes.gif'
        ]
		const index = Math.floor(Math.random() * (foodList.length));
        const embed = new Discord.MessageEmbed()
      	    .setTitle(`For your meal, Karen recommends ${foodList[index]}!`)
      	    .setColor("a6c7e5")
            .setImage(foodImg[index])
    	msg.channel.send(embed);
	},
};