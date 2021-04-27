//const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   // console.log(randomNumber);
  document.body.style.backgroundColor = getRandomColor();
  color.textContent = getRandomColor();
});

function getRandomColor(){
    var letters='0123456789ABCDEF'
    var color='#'
    for (let index = 0; index < 6; index++) {
        var r=Math.floor(Math.random()*16)
        color=color+letters[r]
    }
    return color;
}