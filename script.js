var burger = document.querySelector('.burger');
console.log(burger);
// var nav = document.querySelectorAll('.nav-list');
// console.log(nav);
var navbar = document.getElementById('navbar');
// var search = document.querySelector('.s-items');
// console.log(search);
burger.addEventListener('click',()=>{
    console.log('You have clicked the burger');
    if (navbar.className === "navbar") {
		navbar.className = "navbar-clicked";
	} else {
		navbar.className = "navbar";
	}
    



})