// 21.3.22

//start main 
var fade = 2500;
$('#card').click(function () {
    //fade elements
    $('#card').animate({ opacity: 0 }, fade);
    $('#header').animate({ opacity: 0 }, fade);
    $('#title').animate({ opacity: 0 }, fade);
    $('#boxCat').animate({ opacity: 0 }, fade);
    $('#cornerFilgree').animate({ opacity: 0 }, fade);

    //make cat go down
    setTimeout(() => {
        $('#catId').stop();
        $('#catId').animate({ bottom: "-100%" }, fade);
    }, fade)

    //cover screen into darkness
    setTimeout(() => {
        $("#darkScreen").animate({ opacity: "100%" }, fade, "linear")
    }, fade);

    //go to main
    setTimeout(() => {
        location.href = "./html/main.html";
    }, fade * 3);
});

// bring cat up and down
const catSlide = document.getElementById('catId');
$('#catId').click(function () {
    catSlide.classList.toggle('bump');
})