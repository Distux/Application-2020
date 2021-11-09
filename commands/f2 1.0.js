

module.exports = {
    name: 'test2',
    description: 'Gasp',
    aliases: ['f2c1', 'f2c2', 'f2c3'],
    cooldown: 1,
    args: true,
    usage: '[answer] [@yourself]',
    execute(msg, args) {
        if (args.length != 2) {
			return msg.channel.send(`Please send your answer like [Answer Choice] [@yourself], ${msg.author}!`);
        }

        var chamber = msg.content.charAt(10);         
        chamber = parseInt(chamber) - 1;
        var key = ["bam", "b", "a"];
        var roleTarget = ['Floor 2 C2', "Floor 2 C3", "Floor 3 C1"]
        var answer = args[0].toLowerCase();


        /*if(!(answer == key[0] || answer == key[1] ||answer == key[2]))
        {
            return msg.channel.send("Those are not correct answers!");
        }*/
        //msg.channel.send(roleTarget[chamber]);
        if (answer === key[chamber])
        {   
            //msg.channel.send("success")
            const role = msg.guild.roles.cache.find(role => role.name === roleTarget[chamber]);
            //const member = msg.guild.members.cache.find(member => member.id === msg.author.id);
            const member = msg.mentions.members.first();
            if (member.id == msg.author.id) {
                //msg.delete({ timeout:1000 });
                member.roles.add(role);
                msg.channel.send("Correct! You can go to the next chamber/floor now!");
            }
            else{
                msg.channel.send("Correct but please mention yourself after the command.");
            }
        } else 
        {
            //msg.delete();
            return msg.channel.send("Wrong answer, bzzt!");
        }
    },
 };

