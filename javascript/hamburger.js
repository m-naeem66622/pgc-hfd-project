// Burger Icon Working Start
let burgerButton = document.querySelector(".burger");
let burgerOpen = false;
let logoImage = document.getElementById("logo");
let navBar = document.getElementById("navbar");
let navLinksContainer = document.getElementById("nav-links");
let navLinks = document.querySelectorAll("#nav-links .nav-links");
let navLinksActiveBefore = document.querySelector(".nav-links.active::before");
let navLinksActiveAfter = document.querySelector(".nav-links.active::after");
let navFadeTime = [0.3, 0.37, 0.44, 0.51, 0.59];

burgerButton.addEventListener("click", () => {
	if (burgerOpen != true) {
		Open();
	} else {
		burgerButton.classList.remove("open");
		if (window.scrollY >= 65) {
			document.querySelector(".burger .line").style.backgroundColor = "#2c2b6f";
		} else {
			document.querySelector(".burger .line").style.backgroundColor = "#fff";
		}

		// Sliding Logo Right To Left
		setTimeout(() => {
			logoImage.style.animationName = "slideLeft";
			logoImage.style.animationDuration = "0.8s";
			logoImage.style.animationFillMode = "forwards";
		}, 700);

		// Sliding Navlinks From Left To Right
		for (let i = 0, j = navLinks.length - 1; i < navLinks.length; i++, j--) {
			var element = navLinks[i];
			element.style.animation = `navLinkFadeOut 0.5s ease-in-out forwards ${navFadeTime[j]}s`;
		}

		// Sliding Navbar Height Bottom To Top
		setTimeout(() => {
			navBar.style.animationName = "initialHeight";
			navBar.style.animationDuration = "0.6s";
			navBar.style.animationFillMode = "forwards";
		}, 700);

		// For Logo To Avoid Vertically Center While Changing Height Of Navbar
		setTimeout(() => {
			logoImage.style.position = "fixed";
			logoImage.style.top = "0";
		}, 1100);

		//
		setTimeout(Close, 1100);
	}
});

function Open() {
	logoImage.removeAttribute("style");
	navBar.removeAttribute("style");
	navLinks.forEach((element) => {
		element.style.transform = "translateX: 80px";
		element.style.opacity = "0";
	});
	burgerButton.classList.add("open");
	document.getElementById("header").classList.add("hamburger-active");

	if (window.scrollY >= 65) {
		document.querySelector(".burger .line").style.backgroundColor =
			"transparent";
	} else {
		document.querySelector(".burger .line").style.backgroundColor =
			"transparent";
	}

	navLinks.forEach((link, index) => {
		link.style.animation = `navLinkFadeIn 0.5s ease-in-out forwards ${navFadeTime[index]}s`;
	});

	burgerOpen = true;
	setTimeout(() => {
		navLinks.forEach((element) => {
			element.style.opacity = "1";
		});
	}, 1000);
}

function Close() {
	document.getElementById("header").classList.remove("hamburger-active");

	burgerOpen = false;

	setTimeout(() => {
		logoImage.removeAttribute("style");
		navBar.removeAttribute("style");
		navLinks.forEach((element) => {
			element.removeAttribute("style");
		});
	}, 1000);
}
