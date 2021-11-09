

module.exports = {
    name: 'hint',
    description: 'Gasp',
    aliases: ['h'],
    cooldown: 1,
    usage: '[answer]',
    execute(msg, args) {
        const member = msg.guild.member(msg.author);
        var hint = member.roles.cache.find(h => h.name == "Hint 1");
        var hintNum = 1;
        //msg.channel.send(hint);
        var role = msg.guild.roles.cache.find(role => role.name === "Hint 1");
        member.roles.add(role);
        if (typeof hint != "undefined") {
            var hint = member.roles.cache.find(h => h.name === "Hint 2");
            hintNum = 2;
            role = msg.guild.roles.cache.find(role => role.name === "Hint 2");
            member.roles.add(role);
            //console.log(hint + "inside undef 1");
            if (typeof hint != "undefined") {
                var hint = member.roles.cache.find(h => h.name === "Hint 3");
                hintNum = 3;
                role = msg.guild.roles.cache.find(role => role.name === "Hint 3");
                member.roles.add(role);
                //console.log(hint + "inside undef 2")
            }
        }

        //msg.reply("hi " + hint);
        var rName = member.roles.cache.filter(word => word.name.includes("Floor")).last(1)[0].name;
        //msg.channel.send(rol + "!")
        var floor = rName.charAt(6);
        //console.log(rName)
        floor = parseInt(floor) - 1;
        var chamber = rName.charAt(9);
        chamber = parseInt(chamber) - 1;




        var key1 = [[["Maybe replay the intro? Look at her character info in game :)", "When you first meet her she is out on her job", "... youre just messing with me arent you."],
        ["Think about her skills, particularly her E skill", "Zap! She teleports, just like a ---", "Who else can get onto peaked roofs so easily?"],
        ["Well, each weapon has its effects. One does big aoe single blast dmg, one does quick repeated fire, another is a homemade explosive", "Bazookas have big aoe, ak47 is lighter and less aoe in general, and molotovs are just cool but not as powerful as bazooka", "... you ought to just look up what each weapon is..."]],
        [["Have you heard of morse code? What about the language of computers?", "you may use the internet", "the language of computers is called binary"],
        ["Maybe look this one up :(", "its truly acutally quite depressing", "she only had 5 min of screen time during the main story..."],
        ["Think of the local cult in #liyue", "The one with a big voidbringer tree?", "check the pins there, theres a message saying 'I am a -----', maybe consider joining ;)"]],
        [["have you heard of a rebus? maybe look it up.", "the gray image is the depiction of someones *back*, the hashtag is a literal hashtag and the man is a man", "you have to reference the genshin impact community server"],
        ["Hmmm, do the italicized letters *really* matter?", "maybe the look at the first letters of each line", "read vertically the leftmost letters of question."],
        ["There is a hint in **every** chamber, except chamber 0", "what does every channel in discord have?", "a channel name and a *description*"]],
        [["Its a living being in genshin, it appears in windrise!", "When you get close, it tries to fly away, unless you have sayu", "its bright and clear :D"],
        ["Think of the many types of word puzzles... maybe this one is a little mixed up? First try unscrambling the words.", "looking up a word unscrambler may work wonders. then look up a sentence unscrambler.", "the channel you have to check is under the genshin category."],
        ["Look at all the mentions of numeric references, even the chemical, times, and animals", "The answer is a number.", "its 14 digits long, also the 8 in octapus is not one of the things you count"]],
        [["Its a website", "Try shifting the letters over?", "once you find the website, think of what is `decorations` an anagram of? Maybe theres something that doesn't belong there but it may be helpful."],
        ["Theres two layers of pattern for this one", "one of them is reversal, there is one more step, and the pattern applies to the numbers as well", "if you react maybe something will happen, think of how you got the @shiros test subject role in the first place..."],
        ["Dont forget the https.discord ect \n1) consider how many letters you have to shift to get from the cipher link to https \n2) Perhaps its the name of this humble bot? \n3) Think of the italicized words \n4) Maybe it corresponds to a letter in the alphabet? \n5) -ests \n6)Now you cant kill me heheheh \n7) Unscramble the word. \n8) What are libraries filled with? \n9) Pls dont ask for help here \n10) Binary uwu", "only some questions have extra hints: \n3) the question that has this is in level 1 \n9) aight fine i will let you ask for help, next time", "9) hm theres this many archons in teyvat. how about that?"]],
        [["There's 3 sixes indicating that theres 3 features connecting the valid numbers you need to add together. Simple addition, not adding the digits or anything", "One of the features is that there are only six valid numbers", "Another feature is all valid numbers have six digits"],
        ["It relates to a famous movie, theres a quote in the server", "Be sure to look at roles and channel descriptions!", "They found these animals while walking down a yellow brick road!"],
        ["I am a number", "A little help can be found by looking at the number of letters in the underlined words and using them on the second paragraph", "I am a six digit number"]]];

        msg.delete({ timeout: 1 })
        msg.reply("Hint #" + hintNum + " sent for " + rName + "!")
        msg.author.send(rName + " Hint #" + hintNum + ": " + key1[floor][chamber][hintNum - 1]) // subtract 1 b/c index starts at 0
    },
};

