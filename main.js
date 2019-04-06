'use strict';
let navbarTogglerIcon = document.querySelector(".navbar-toggler-icon");
let navbarToggler = document.querySelector(".navbar-toggler");
let navbar = document.querySelector("#navbar");

menuBuger.addEventListener("click", function() {
	if (!navbarTogglerIcon.classList.contains("navbar-toggler-icon-close")) {
		document.body.style.backgroundImage = "url('img/menu-bg.png')";
	} else {
		document.body.style.backgroundImage = "";
	}

	navbarToggler.classList.toggle("navbar-toggler-close");
	navbarTogglerIcon.classList.toggle("navbar-toggler-icon-close");
		navbar.classList.toggle("bg-transparent");
});

function resizeToDesktop() {
	if(window.innerWidth > 768) {
		document.body.style.backgroundImage = "";
		document.getElementById("navbar").classList.remove("bg-transparent");
		document.querySelector("#navbarCollapse").classList.remove("show");
		navbarToggler.classList.remove("navbar-toggler-close");
		navbarTogglerIcon.classList.remove("navbar-toggler-icon-close");
	}
}

window.onresize = resizeToDesktop;