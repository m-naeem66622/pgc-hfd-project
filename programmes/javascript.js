// Functionality of Navigation Bar on Scroll Start
const header = document.querySelector("#header");
window.onscroll = () => {
	var top = window.scrollY;

	if (top >= 65) {
		header.classList.add("navbar-active");
		document
			.querySelector(".navbar__logo")
			.setAttribute("src", "../PGC_Stock/LOGO/PGCLogo.svg");
		document
			.getElementById("facebook")
			.setAttribute("src", "../PGC_Stock/LOGO/facebook-blue.png");
		document
			.getElementById("instagram")
			.setAttribute("src", "../PGC_Stock/LOGO/instagram-blue.png");
		document
			.getElementById("youtube")
			.setAttribute("src", "../PGC_Stock/LOGO/youtube-blue.png");
		if (burgerOpen == true) {
			document.querySelector(".burger .line").style.backgroundColor =
				"transparent";
		} else {
			document.querySelector(".burger .line").style.backgroundColor = "#2c2b6f";
		}
	} else {
		header.classList.remove("navbar-active");
		document
			.getElementById("facebook")
			.setAttribute("src", "../PGC_Stock/LOGO/facebook-white.png");
		document
			.getElementById("instagram")
			.setAttribute("src", "../PGC_Stock/LOGO/instagram-white.png");
		document
			.getElementById("youtube")
			.setAttribute("src", "../PGC_Stock/LOGO/youtube-white.png");
		document
			.querySelector(".navbar__logo")
			.setAttribute("src", "../PGC_Stock/LOGO/logo.svg");
		if (burgerOpen == true) {
			document.querySelector(".burger .line").style.backgroundColor =
				"transparent";
		} else {
			document.querySelector(".burger .line").style.backgroundColor = "#ffffff";
		}
	}
};
