// Functionality of Navigation Bar on Scroll Start
const header = document.querySelector("#header");
window.onscroll = () => {
	if (window.scrollY >= 65) {
		header.classList.add("navbar-active");
		document
			.querySelector(".navbar__logo")
			.setAttribute("src", "PGC_Stock/LOGO/PGCLogo.svg");
		document
			.getElementById("facebook")
			.setAttribute("src", "PGC_Stock/LOGO/facebook-blue.png");
		document
			.getElementById("instagram")
			.setAttribute("src", "PGC_Stock/LOGO/instagram-blue.png");
		document
			.getElementById("youtube")
			.setAttribute("src", "PGC_Stock/LOGO/youtube-blue.png");
		if (window.innerWidth < 700) {
			if (burgerOpen == true) {
				document.querySelector(".burger .line").style.backgroundColor =
					"transparent";
			} else {
				document.querySelector(".burger .line").style.backgroundColor =
					"#2c2b6f";
			}
		}
	} else {
		header.classList.remove("navbar-active");
		document
			.getElementById("facebook")
			.setAttribute("src", "PGC_Stock/LOGO/facebook-white.png");
		document
			.getElementById("instagram")
			.setAttribute("src", "PGC_Stock/LOGO/instagram-white.png");
		document
			.getElementById("youtube")
			.setAttribute("src", "PGC_Stock/LOGO/youtube-white.png");
		document
			.querySelector(".navbar__logo")
			.setAttribute("src", "PGC_Stock/LOGO/logo.svg");
		if (window.innerWidth < 700) {
			if (burgerOpen == true) {
				document.querySelector(".burger .line").style.backgroundColor =
					"transparent";
			} else {
				document.querySelector(".burger .line").style.backgroundColor =
					"#ffffff";
			}
		}
	}
};

// Functionality of Navigation Bar on Scroll End

// Content Reveal Functionality Start
window.addEventListener("scroll", reveal);

function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 50;

		if (revealtop < windowheight - revealpoint) {
			reveals[i].classList.add("reveal-active");
		} else {
			reveals[i].classList.remove("reveal-active");
		}
	}
}
// Content Reveal Functionality End

// Adding Active Class In Selected Tab
//const list = document.querySelectorAll('.list');
// function activelink() {
// 	navLinks.forEach((item) => item.classList.remove("active"));
// 	this.classList.add("active");
// }
// navLinks.forEach((item) => item.addEventListener("click", activelink));
