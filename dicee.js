var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var imgSrcName1 = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imgSrcName1);


var randomNumber2 = Math.floor(Math.random() * 6) +1;
var imgSrcName2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imgSrcName2);

//这里加的src link不是从dicee.js文件出发的，而是从dicee.html出发的！

if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent="Draw!";
} else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"; //这里如果想加emoji的话用textContent不行，因为emoji code是html code
    document.querySelector("h1").classList.add("win-text");
} else{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
    document.querySelector("h1").classList.add("win-text");
}
