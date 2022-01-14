// Variable Declaration For See More Functionality
var seeMoreCount = document.querySelectorAll("#team .slide .see-more");
var hideMoreCount = document.querySelectorAll("#team .slide .hide-more");
var seeMoreActive = document.querySelectorAll("#team .slide .intro");
var selected;
let playInterval = true;

// Second Slider Manual And Auto Navigation Start
var balls = document.querySelector("#history .balls");
var quantity = document.querySelectorAll("#history .slide");
var current = 0;
var slidem = document.getElementsByClassName("first")[1];
var toRoll = true;

for (let i = 0; i < quantity.length; i++) {
	var div = document.createElement("div");
	div.id = i;
	balls.appendChild(div);
}
document.getElementById("0").classList.add("imgCurrent");

var pos = document.querySelectorAll("#history .balls div");

for (let i = 0; i < pos.length; i++) {
	pos[i].addEventListener("click", () => {
		current = pos[i].id;
		toRoll = false;
		slide();
	});
}

function slide() {
	if (current >= quantity.length) {
		current = 0;
	} else if (current < 0) {
		current = quantity.length - 1;
	}
	document.querySelector(".imgCurrent").classList.remove("imgCurrent");
	slidem.style.marginLeft = -50 * current + "%";
	document.getElementById(current).classList.add("imgCurrent");
}

setInterval(() => {
	if (toRoll) {
		current++;
		slide();
	} else {
		toRoll = true;
	}
}, 6000);
// Second Slider Manual And Auto Navigation End

// First Slider Manual And Auto Navigation Start
var ballsTeam = document.querySelector("#team .balls");
var quantityTeam = document.querySelectorAll("#team .slide");
var first = 0;
var slidemTeam = document.getElementsByClassName("first")[0];
var toRollTeam = true;

for (let i = 0; i < quantityTeam.length; i++) {
	var div = document.createElement("div");
	div.className = i; // point
	ballsTeam.appendChild(div);
}
document.getElementsByClassName("0")[0].classList.add("slideCurrent"); //point

var posTeam = document.querySelectorAll("#team .balls div");

for (let i = 0; i < posTeam.length; i++) {
	posTeam[i].addEventListener("click", () => {
		first = posTeam[i].className; // point
		toRollTeam = false;
		playInterval = true;
		slideTeam();
	});
}

function slideTeam() {
	if (!(selected == undefined)) {
		document.querySelectorAll("#team .slide .intro")[selected].style.marginTop =
			"0";
	}

	if (first >= quantityTeam.length) {
		first = 0;
	} else if (first < 0) {
		first = quantityTeam.length - 1;
	}
	document.querySelector(".slideCurrent").classList.remove("slideCurrent"); // point
	slidemTeam.style.marginLeft = -20 * first + "%";
	document.getElementsByClassName(first)[0].classList.add("slideCurrent"); // point
}

function timeInterval() {
	if (toRollTeam) {
		first++;
		slideTeam();
	} else {
		toRollTeam = true;
	}
}

let Interval;
if (playInterval == true) {
	Interval = setInterval(timeInterval, 6000);
}

// First Slider Manual And Auto Navigation Mobile Responsive Start
for (let i = 0; i < seeMoreCount.length; i++) {
	seeMoreCount[i].addEventListener("click", () => {
		selected = i;
		document.querySelectorAll("#team .slide .intro")[i].style.marginTop =
			"-383px";
		playInterval = false;
		clearInterval(Interval);
	});
}

for (let i = 0; i < hideMoreCount.length; i++) {
	hideMoreCount[i].addEventListener("click", () => {
		selected = i;
		document.querySelectorAll("#team .slide .intro")[i].style.marginTop = "0";
		playInterval = true;
		Interval = setInterval(timeInterval, 6000);
	});
}

// Slide Section Height Control
let slideSection = document.querySelectorAll(".slide-section");
let homeSection = document.getElementById("home");
let teamSection = document.getElementById("team");
let historySection = document.getElementById("history");

window.onload = () => {
	if (window.innerHeight < 560) {
		slideSection.forEach((element) => {
			element.style.height = "initial";
		});

		teamSection.style.height = "initial";
		historySection.style.height = "initial";
	}
};

window.onresize = () => {
	const swipe = document.querySelector(".swipe");

	homeSectionHeight = window.innerHeight - 80;
	swipe.style.top = `${homeSectionHeight}px`;

	if (window.innerHeight < 560) {
		slideSection.forEach((element) => {
			element.style.height = "initial";
		});

		teamSection.style.height = "initial";
		historySection.style.height = "initial";
	}
};

document.addEventListener("DOMContentLoaded", () => {
	const swipe = document.querySelector(".swipe");
	homeSectionHeight = window.innerHeight - 80;

	swipe.style.top = `${homeSectionHeight}px`;
});
