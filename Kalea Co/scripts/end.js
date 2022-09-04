// 21.3.22

//make title fall and start end sequence
$("#title").hover(function () {
    $("#title").addClass('animate__hinge');
    start();
});

//start end sequence
function start(){
    setTimeout(() => {
        $("#hos").css("visibility","visible");
        $("#hos").addClass("animate__bounceInRight");
        $("#dialogueBox").addClass("animate__jackInTheBox");
        $("#dialogueBox").css("visibility","visible");
    }, 2000)
}

//bump up cat
const catSlide = document.getElementById('catId');
$('#catId').click(function () {
    catSlide.classList.toggle('bump');
    document.getElementById("dialogue").textContent = "Happy Birthday Sis uwu -Your Favorite sibling (maybe/sometimes)";
})

//dialogue for text box
var hosDialogue = [
    "Congrats on escaping! Pretty good, wasn't it? As expected of me.",
    "You're surprised to see me aren't you?",
    "Huh? You saw me earlier?",
    "That's strange, I thought I had... Hmph, well whatever, theres an easy solution that!",
    "*The Herrscher of Sentience has modified your memory, you have no recollection of seeing her earlier*",
    "Anyways, Hi there! A little bird told me its your birthday.",
    "Considering the magnanimous me, I figured it might be amusing to give a few words of celebration.",
    "Hm? You don't think its so simple? You're clearly mistaken. I am correct. I am always correct!",
    "Although, it is partially as you say.",
    "That old timer had a fortuious meeting with that little bird, so I have come to pay old debts.",
    "It was something to do with rebuilding the Shenzhou Pheonix Farm I think.",
    "But anyways, I've just come to wish you a very happy 2nd birthday!",
    "May you be blessed with even a small sliver of my greateness, and eternal prosperity will follow.",
    "Its not your 2nd birthday? Damn that bird, did she give me the wrong information?",
    "Happy 21st birthday, then!",
    "Yahooey!, another job well done, I am really the best~",
    "Stop talking to me and go celebrate now~"
]


//update textbox
var hos = document.getElementById("hos");
var txt = document.getElementById("dialogue");
hos.onclick = function nextLine() {
    //get next text line
    var current = Number(txt.getAttribute("data-textLine"));
    txt.setAttribute("data-textLine", current + 1)

    //check for bounds and if at end bring cat up
    if (current >= hosDialogue.length) { 
        txt.setAttribute("data-textLine", current - 1); 
        catSlide.classList.toggle('bump'); 
    }

    //update text
    $("#dialogue").animate({ opacity: "0%" }, 500);
    setTimeout(() => {
        txt.textContent = hosDialogue[current];
        $("#dialogue").animate({ opacity: "100%" }, 500);
    }, 500)
};