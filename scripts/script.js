// hamburger menu credits aan Cesar. Ik heb deze code samen met hem geschreven 

var deButton = document.querySelector("header ul:nth-of-type(1) li:nth-of-type(1) button:nth-of-type(1)");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	var hetMenu = document.querySelector("header");
	hetMenu.classList.toggle("open");
}

var deZoekButton = document.querySelector("header ul:nth-of-type(1) li:nth-of-type(1) button:nth-of-type(2)");

deZoekButton.addEventListener("click", toggleZoekMenu);

function toggleZoekMenu() {
	var hetZoekMenu = document.querySelector("header");
	hetZoekMenu.classList.toggle("openZoek");
}

