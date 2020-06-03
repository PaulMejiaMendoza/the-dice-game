let randomNumber1 = Math.ceil(Math.random() * 6) //random number from 1 to 6
let randomNumber2 = Math.ceil(Math.random() * 6)

let randomDiceImage1 = `images/dice${randomNumber1}.png` // to pick any image from 1 to 6
let randomDiceImage2 = `images/dice${randomNumber2}.png`

let dice1 = document.querySelector('.dice1');
let dice2 = document.querySelector('.dice2');

dice1.setAttribute("src", randomDiceImage1);
dice2.setAttribute("src", randomDiceImage2);

if( randomNumber1 > randomNumber2){
    document.querySelector('.container__title').innerHTML = "Player 1 wins"
}else if (randomNumber1 < randomNumber2){
    
    document.querySelector('.container__title').innerHTML = "Player 2 wins"
}else {
    document.querySelector('.container__title').innerHTML = "Draw"
}