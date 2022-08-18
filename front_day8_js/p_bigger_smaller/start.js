
const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');



let textSize = 20; // font-size for p
text.style.fontSize = textSize + "px";
text.style.backgroundColor = '#ddd';

//increase 

btnIncrease.addEventListener('click',textIncrease)


function textIncrease(){
	textSize++;
	text.style.fontSize = textSize + "px";
}

//decrease

btnDecrease.addEventListener('click',textDecrease)

function textDecrease(){
	textSize--;
	text.style.fontSize = textSize + "px";
}


// JavaScript Document