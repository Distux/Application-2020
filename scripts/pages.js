// 21.3.22

//riddle 
var riddle = "Ai ai / It's what brought you here / Ai ai / It's whats written in stone / Bai bai / It's what counts to appear / Bai bai / It's what frees thy throne"

//next referenced onclick in pages.html, show inkblots
function next() {
    $('#inkstains').animate({ opacity: "100%" }, 500);
    setTimeout(() => {
        $('#inkstains').animate({ opacity: "0%" }, 500);
    }, 2000);

    setTimeout(() => {
        $('#inkstains2').animate({ opacity: "100%" }, 800);
        setTimeout(() => {
            $('#inkstains2').animate({ opacity: "0%" }, 500);
        }, 1400);
    }, 300);

    setTimeout(() => {
        $('#text').animate({ opacity: "0%" }, 800);
        $('#nextButton').animate({ opacity: "0%" }, 800);
        setTimeout(() => {
            $('#text').animate({ opacity: "100%" }, 500);
        }, 1400);
    }, 300);

    setTimeout(() => {
        document.getElementById("nextButton").style.visibility = "hidden";
        document.getElementById("text").textContent = riddle;
        document.getElementById("text").style.fontFamily = "lulu";
    }, 1100);
}

//go back to main, referenced onclick in pages.html, fade text
function back() {
    $('#text').animate({ opacity: "0%" }, 800);
    $('#backButton').animate({ opacity: "0%" }, 800);
    $('#nextButton').animate({ opacity: "0%" }, 800);
    setTimeout(() => {
        location.href = "./main.html";
    }, 1300);
}