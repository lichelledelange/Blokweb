// hamburger menu 

var deButton = document.querySelector("header ul:nth-of-type(1) button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	var hetMenu = document.querySelector("header");
	hetMenu.classList.toggle("open");
}