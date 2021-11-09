

module.exports = {
    name: 'test',
    description: 'Gasp',
    aliases: ['f1c2', 'f1c3', 'f1c1'],
    cooldown: 1,
    args: true,
    usage: '[answer]',
    execute(msg, args) {
        if (args.length[0] != 1 && args.length != 1) {
			return msg.channel.send(`Please send your answer with just [Answer Choice], ${msg.author}!`);
        }
        
        var chamber = msg.content.charAt(10);         
        chamber = parseInt(chamber) - 1;
        var key = ["a", "b", "a"];
        var roleTarget = ['Floor 1 C2', "Floor 1 C3", "Floor 2 C1"]
        var answer = args[0].toLowerCase();


        if(!(answer == "a" || answer == "b" ||answer == "c"))
        {
            return msg.channel.send(`Pls choose an answer from a, b, or c!`);
        }
        //msg.channel.send(roleTarget[chamber]);
        if (answer === key[chamber])
        {   
            //msg.channel.send("success")
            msg.delete({timeout:1000});
            const role = msg.guild.roles.cache.find(role => role.name === roleTarget[chamber]);
            const member = msg.guild.member(msg.author);
            member.roles.add(role);
            msg.channel.send("Correct! You can go to the next chamber/floor now!");
            
        } else 
        {   
            msg.delete({timeout:1000});
            return msg.channel.send("Wrong answer, bzzt!");
        }
    },
 };
