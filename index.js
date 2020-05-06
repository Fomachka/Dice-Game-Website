var randomNumber = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomNumber3 = Math.floor(Math.random() * 6 + 1);

function RandomImage(number){
    if(number === 1){
        document.querySelector("div img").setAttribute("src", "images/dice1.png");
    }else if(number === 2){
        document.querySelector("div img").setAttribute("src", "images/dice2.png");
    }else if(number === 3){
        document.querySelector("div img").setAttribute("src", "images/dice3.png");
    }else if(number === 4){
        document.querySelector("div img").setAttribute("src", "images/dice4.png");
    }else if(number === 5){
        document.querySelector("div img").setAttribute("src", "images/dice5.png");
    }else{
        document.querySelector("div img").setAttribute("src", "images/dice6.png");
    }

}
function RandomImageTwo(number){
    
    if(number === 1){
        document.querySelector("div .img2").setAttribute("src", "images/dice1.png");
    }else if(number === 2){
        document.querySelector("div .img2").setAttribute("src", "images/dice2.png");
    }else if(number === 3){
        document.querySelector("div .img2").setAttribute("src", "images/dice3.png");
    }else if(number === 4){
        document.querySelector("div .img2").setAttribute("src", "images/dice4.png");
    }else if(number === 5){
        document.querySelector("div .img2").setAttribute("src", "images/dice5.png");
    }else{
        document.querySelector("div .img2").setAttribute("src", "images/dice6.png");
    }

}

function winner(){
    if(randomNumber > randomNumber2){
        document.querySelector("h1").textContent = "🚩Player1 Wins!";
    }else if(randomNumber < randomNumber2){
        document.querySelector("h1").textContent = "Player2 Wins! 🚩";
    }else{
        document.querySelector("h1").textContent = "💢Draw";
                        
    }
}
RandomImage(randomNumber);
RandomImageTwo(randomNumber2);
winner();