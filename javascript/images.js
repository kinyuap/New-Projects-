let i = 0;
let intervalId;

let box1 = document.getElementById("image1");
let box2 = document.getElementById("image2");
let box3 = document.getElementById("image3");
let box4 = document.getElementById("image4");
let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let info = document.getElementById("info");


 function firstDot() {
 box1.style.opacity = 1;
 box2.style.opacity = 0;
 box3.style.opacity = 0;
 box4.style.opacity = 0;
 info.innerHTML = "Image 1"
 i = 0;
}

 function secondDot() {
  box1.style.opacity = 0;
  box2.style.opacity = 1;
  box3.style.opacity = 0;
  box4.style.opacity = 0;
  info.innerHTML = "Image 2"
  i = 1;
}
 function thirdDot(){
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 1;
  box4.style.opacity = 0;
  info.innerHTML = "Image 3";
  i = 2;
}
 function fourthDot(){
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 1;
  info.innerHTML = "Image 4"
  i = 3; 
}

function right(){
  if (i === 0){
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    info.innerHTML = "Image 1"
    i++
  } else if (i=== 1){
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    info.innerHTML = "Image 2"
    i++
  } else if (i === 2 ){
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    box4.style.opacity = 0;
    info.innerHTML = "Image 3";
    i++
  } else if (i === 3){
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 1;
    info.innerHTML = "image 4"
    i = 0;
  }
}
 function left(){
  if (i === 0){
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    info.innerHTML = "image 1"
    i++
  } else if (i === 1){
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    info.innerHTML = "image 2"
    i++
  } else if (i === 2){
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    box4.style.opacity = 0;
    info.innerHTML = "image 3";
    i++;
  } else if (i === 3){
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 1;
    info.innerHTML = "image 4"
    i = 0;
  }
 }

document.querySelector(".rightArrow").addEventListener("click", right);
stopInterval();
startInterval();
document.querySelector(".leftArrow").addEventListener("click", left);
stopInterval();
startInterval();

function right(){
  i = (i + 1) % 4;
  updateIMage();
}
function left(){
  i = (i - 1 + 4) % 4;
  updateIMage();
}
function updateIMage(){
  if (i === 0){
    firstDot();
  } else if (i === 1){
    secondDot();
  } else if (i === 2) {
    thirdDot();
  } else if (i === 3) {
    fourthDot();
  }
}

function startInterval() {
  intervalId = setInterval(() => {
    right();
  }, 9000);
}

startInterval();

function stopInterval() {
  clearInterval(intervalId)
}