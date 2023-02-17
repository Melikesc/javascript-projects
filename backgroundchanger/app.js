const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["#fb6fa5","#f0e3df","#f3c9fb","#e5c95a","#748d69","#efc050", 
    "#855050" , "#9d44f0","#d51961 ","#1474ca ","#141414" ,"#303a2e ",
   "#240090 ","#282828 ","#3500d3 ","#3399ff ","#bada55 ","#9d44f0 ","#4169e1 ",
    "#c584e4 ","#82ac64 ","#710909 ","#ff8002 ","#36374b "," #b49adf "," #c3a59f "," #aaaaaa ",
   "#ff0000","#d2d0bc","#4e0090","#003d37","#01524a","#ff6e12","#bb0000",
    "#da70d6","#a14107"," #00bbd4 "," #5a5a5a "," #f3889e ","  #fef769 ","#ffff6a"];

button.addEventListener("click", changeBackground);

function changeBackground(){
    const randomNumber = Math.floor(Math.random()*colors.length);
    const choosencolor = colors[randomNumber];
    body.style.backgroundColor = choosencolor;
}




