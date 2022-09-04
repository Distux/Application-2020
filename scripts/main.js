// 21.3.22

//kick pillow
const pillow = document.getElementById('pillow');
pillow.onclick = function () {
  pillow.classList.toggle('animate__shakeX');
}

//go to riddle
const paper = document.getElementById("riddle");
paper.onclick = function () {
  paper.classList.add("animate__pulse");
  setTimeout(() => {
    location.href = './pages.html';
  }, 2000);
}


//update combo lock on stone walls
function up(num) {
  //raise numbers and check for bounds
  var current = Number(document.getElementById(num).textContent);
  if (current + 1 == 10) {
    document.getElementById(num).textContent = 0;
  } else {
    document.getElementById(num).textContent = current + 1;
  }

  //check if correct combo
  if (Number(document.getElementById("number1").textContent) == 0 && Number(document.getElementById("number2").textContent) == 5 && Number(document.getElementById("number3").textContent) == 2 && Number(document.getElementById("number4").textContent) == 0) {
    next();
  }
}

//text red and darken screen and then move to final 
function next(){
  document.getElementById("clock").style.color = "red";
    $('#clock').animate({ opacity: "0%" }, 500);
    setTimeout(() => {
      $('#roomContainer').animate({ opacity: "0%" }, 1000);
    }, 500)
    setTimeout(() => {
      location.href = "./end.html";
    }, 1500);
}