function rollDice() {
    var randomNumber1=Math.floor(Math.random()*6)+1;    //random number which generates between 1-6. (for example 0.9*6=5.4+1=6.4 floor of 6.4=6)
var player1image="images/dice"+randomNumber1+".png";      //setiing image location path assigned as per the random number generated.

//same thing as above for the player 2
var randomNumber2=Math.floor(Math.random()*6)+1;
var player2image="images/dice"+randomNumber2+".png";

//seting the attraibute images src to the image number generated . This is done to both the players.
document.querySelectorAll("img")[0].setAttribute("src",player1image);
document.querySelectorAll("img")[1].setAttribute("src",player2image);

//logic behind the displayed message
if(player1image>player2image){
    document.querySelector("h1").innerHTML="🏆 Player 1 wins!"; //using dom to change the inner HTML as oer conditions.
}
else if(player1image<player2image){ 
    document.querySelector("h1").innerHTML="Player 2 wins! 🏆"; //using dom to change the inner HTML as oer conditions.
}
else{
    document.querySelector("h1").innerHTML="It's a draw!"; //same as above
}
}

if(performance.getEntriesByType("navigation")[0].type==="reload"){ //it calculates the number of time the page is reloaded or navigated , iff it is refreshed then only the function and its changes will be generated otherwise the refresh page will be there.
    rollDice();
}