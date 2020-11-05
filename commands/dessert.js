module.exports = {
	name: 'dessert',
	description: 'Dinner for 2, sometimes! Displays a tantalizing dinner for you~',
    aliases: ['sweets'],
    execute(msg, args, Discord) {
		const dessertList = [
			'boba',
			'cake',
			'ice cream',
			'sunday',
			'rollcake'
        ]
        const dessertImg = [
            'https://cdn.discordapp.com/attachments/481240992624934924/748048524339576942/boba.gif',
            'https://cdn.discordapp.com/attachments/481240992624934924/748048584758526002/cake.gif',
            'https://cdn.discordapp.com/attachments/481240992624934924/750832976761454592/ice_cream.gif',
            'https://cdn.discordapp.com/attachments/481240992624934924/748051429821906974/sunday.gif',
            'https://cdn.discordapp.com/attachments/481240992624934924/750833035775049788/rollcake.gif'
        ]
		const index = Math.floor(Math.random() * (dessertList.length));
        const embed = new Discord.MessageEmbed()
      	    .setTitle(`For dessert, Karen, a natural sweet tooth, recommends ${dessertList[index]}`)
      	    .setColor("a6c7e5")
            .setImage(dessertImg[index])
    	msg.channel.send(embed);
    },
};