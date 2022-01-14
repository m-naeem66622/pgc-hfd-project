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

// For Updating Footer Contact Links

document.addEventListener("DOMContentLoaded", () => {
	var footerLinks = document.querySelectorAll(
		".logo-and-details > table td:nth-child(2)"
	);

	footerLinks.forEach((element) => {
		element.innerText = "";
	});

	footerLinks[0].innerHTML = `<a href="tel:0547-640107">(0547) 640107</a>`;
	footerLinks[1].innerHTML = `<a href="mailto:pgchfd786@gmail.com">pgchfd786@gmail.com</a>`;
	footerLinks[2].innerHTML = `<a href="https://complaint.pgc.edu">complaint.pgc.edu</a>`;
});
