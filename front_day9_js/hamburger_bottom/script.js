// JavaScript Document

const icon = document.querySelector(".arrow");

const nav = document.querySelector("nav");

icon.addEventListener("click",function(){
	icon.classList.toggle("on");
	nav.classList.toggle("on");
})