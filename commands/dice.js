const {footer} = require('../config.json');


const diceImg = [
    'https://cdn.discordapp.com/attachments/481240992624934924/750922766596702299/flaming_d20.gif',
    'https://cdn.discordapp.com/attachments/481240992624934924/750922804505084005/glass_die.gif',
    'https://cdn.discordapp.com/attachments/481240992624934924/750922839074275358/holo_dice.gif',
    'https://cdn.discordapp.com/attachments/481240992624934924/750922873706905710/infinite_die.gif',
    'https://cdn.discordapp.com/attachments/481240992624934924/750922907882094602/light_die.gif',
    'https://cdn.discordapp.com/attachments/481240992624934924/750922949816614942/neon_dice.gif',
    'https://cdn.discordapp.com/attachments/481240992624934924/750922732891537499/die_outline.gif'
]



module.exports = {
	name: 'dice',
	description: 'MAY MADOKAMI BLESS YOUR ROLLS! Karen rolls dice, give a number and I will roll from a range of 1 to that number. A second number will tell me how many times to roll the dice',
    args: true,
    aliases: ['d', 'roll', 'die'],
    usage: '[range] [number of dice]',
    execute(msg, args, Discord) {
        const index = Math.floor(Math.random() * (diceImg.length));
        const embed = new Discord.MessageEmbed()
            .setColor("a6c7e5")
            .setTitle("Karen Rolled . . . ")
            .setThumbnail(diceImg[index])
            //.setFooter(footer);

		var numSides = parseInt(args[0]), negative = 0;

		if (numSides == 0) {
			return msg.channel.send("Rolling zero is a no-no");
		} else if (numSides < 0) {
			msg.channel.send("Karen will now use dark mahou to roll negative dice...");
			negative = -1;
		}

		if (args.length == 1) {
			printDie(numSides, negative, embed, msg.channel);
		}
		else {
			var numDice = parseInt(args[1]);
			if (numDice <= 0) {
				return msg.reply("It is unacceptable to expect me to be able to roll a negative or nonexistant number of dice. I know I'm really quite amazing sometimes, but that request is not ok.");
			}
			rollMultiple(msg.channel, numSides, numDice, negative, embed)
		}
	},
};


function rollDie(numSides, negtaive) {
	return Math.floor(Math.random() * Number(numSides) + 1 + negtaive);
}

function rollMultiple(channel, numSides, numDice, negative, embed) {
	var i, dice = "", total = 0;
	for (i = 0; i < numDice; i++) {
		rolled = rollDie(numSides, negative);
		dice += String(rolled) + ", ";
		total += rolled;
    }
    printManyDie(dice.slice(0, ((dice.length) - 2)), total, channel, embed);
}


function printDie(numSides, negative,  embed, channel){
    const rolled = rollDie(numSides, negative);
    embed.setDescription(rolled.toString())
    channel.send(embed);
}

function printManyDie(die, total, channel, embed) {
    embed.setDescription(die)
    .addFields(
        { name: 'Total', value: total },
    )
    channel.send(embed)
}


