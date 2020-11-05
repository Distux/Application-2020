/*
Karen ze first
9/1/2020
Ver 3
Karen bot with bok bok and bok hug, minus some commands
*/


'use strict'; 

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));


const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.msgs = require ("./msgs.json");
const cooldowns = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const activities_list = [ 
	"Karen ze Second", 
	"Shiro",
	"Shiro",
	"Shiro",
	"Magia Record",
	"Madoka Magica"
]; // creates an arraylist containing phrases you want your bot to switch through.

const activities1 = [
	'WATCHING',
	'LISTENING',
	'PLAYING'
] // a list of activities to do

client.on('ready', () => {
	console.log(`Karen logged in, Link Start!`); //${client.user.tag}
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length)); // generates a random number between 1 and the length of the activities array list (in this case 5).
		const index1 = Math.floor(Math.random() * (activities1.length));
		client.user.setActivity(activities_list[index], { type: activities1[index1] }) // sets bot's activities to one of the phrases in the arraylist.
		//.then(presence => console.log(`Activity set to ${presence.activities[0].name}, type ${presence.activities[0].type}, index 1 = ${index1}, index = ${index}`))
  		.catch(console.error); 
    }, 60000); // Runs this every 60 seconds.
});


client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`Karen Ze First welcomes thee, ${member}` , { files: ["./gif/welcome.gif"]});
	
	if(guild.id == "750460731912093766" || guild.id == "481240992167493652")
	{
		const role = guild.roles.cache.find(role => role.name === 'cool person');
		member.roles.add(role);
	}
	
  });





//var origin; // recall who sent fibbonacci last
client.on('message', msg => {
	if (msg.author.bot) return; // so theres no recursion 
	
	
	const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
	if (!prefixRegex.test(msg.content)) return;

	const [, matchedPrefix] = msg.content.match(prefixRegex);
	const args = msg.content.slice(matchedPrefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (commandName === '') {
		msg.channel.send("*What?*  Don't bother me if you have nothing to say, I'm busy ya know? I have things to do, anime to watch, manga to read, and people to stalk. **Go away.**");
	} else if (isDice(msg.channel, commandName, args)) {
		if (isNaN(args[0]) || (args.length == 2 && isNaN(args[1]))) { // check if the args are numbers
			return msg.reply("Bruh, I can't do anything with that input. Just numbers please.");
		}
		client.commands.get('dice').execute(msg, args, Discord);
	}
	
	
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && msg.channel.type === 'dm') {
		return msg.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${msg.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return msg.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(msg.author.id)) {
		const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return msg.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(msg.author.id, now);
	setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);

	try {
		command.execute(msg, args, Discord, client);
	} catch (error) {
		console.error(error);
		msg.reply('there was an error trying to execute that command!');
	}
	
	
});

client.login(token);

function isDice(channel, command, args) {
	//channel.send("isDice called, command = " + command + "args = " + args);
	if ((command === 'roll' || command === 'd') && args.length > 2) {
		channel.send("Please only give 2 numbers, gracias.");
		return false;
	} else if (command[0] === 'd' && checkNum(command.slice(1)) && args.length <= 1) {
		if (command === "d") {
			channel.send("You didn't give me any numbers to roll!");
			return false;
		}
		args.unshift(parseInt(command.slice(1)));
		return true;
	}
	return false;
}


function checkNum(input) {
	if (Number.isInteger(parseInt(input))) {
		return true;
	}
	return false;
}



// Turn bot off (destroy), then turn it back on
/*
function isDice(channel, command, args) {
	//channel.send("isDice called, command = " + command + "args = " + args);
	if ((command === 'roll' || command === 'd') && args.length <= 2) {
		if (!args.length) {
			channel.send("You didn't give me any numbers to roll!");
			return false;
		}
		return true;
	} else if (command[0] === 'd' && checkNum(command.slice(1)) && args.length <= 1) {
		if (command === "d") {
			channel.send("You didn't give me any numbers to roll!");
			return false;
		}
		args.unshift(parseInt(command.slice(1)));
		return true;
	}
	return false;
}*/

/*
	var indicies = "";
		for (var i = 0; i < 100; i ++){
			const index = Math.floor(Math.random() * (foodList.length));
			indicies += String(index) + ", ";
		}
		msg.channel.send(indicies);


	if (msg.content === "1235813" || msg.content === "1,2,3,5,8,13"|| msg.content === "bai") {
		origin = msg.author.id;
		msg.channel.send("The sun sets at dusk, and Anfractum will go with the sun into shadow. Hurt us and we will hurt you: our Nature will rise again.");
	} else if (msg.author.id == origin && msg.content === "fibbonacci") {
		msg.channel.send("3 steps forward, 2 steps back, eat an apple and you'll be back");
	} else if (msg.content == "kkill" && msg.author.id === "429427222659596299"){
		message.channel.send();
	}




} else if (command === 'embed') {
		msg.channel.send("https://cdn.discordapp.com/attachments/481240992624934924/750791634182209647/welcome.gif");
		const embed = new Discord.MessageEmbed()
      	// Set the title of the field
      	.setTitle('A slick little embed')
      	// Set the color of the embed
      	.setColor(0xff0000)
      	// Set the main content of the embed
      	.setDescription('Hello, this is a slick embed!');
    	// Send the embed to the same channel as the message
    	msg.channel.send(embed);
	
	} else if (command === 'what') {// Update log
		if (args == "happened?") {
			msg.channel.send('Nothing, so far.');
		}
	} else if (command === 'shut' && args == "up") {// Hidden commands
		msg.channel.send('nu u');
	} else if (command === 'sanya') {// Hidden commands
		msg.channel.send('Sanya uwu', { files: ["./gif/sanya.gif"]});
	} else if (command === 'reset' && msg.author.id === "429427222659596299") {
		resetBot(msg.channel); 
	




		function resetBot(channel) {
// send channel a message that you're resetting bot [optional]
channel.send('Resetting...')
	.then(msg => client.destroy())
	.then(() => client.login(token));
channel.send('Reset.');
}


		*/