const texts = [
	"is not the learning of facts.",
	"the training of the mind to think.",
	"not a problem.",
	"an opportunity.",
	"not preparation for life.",
	"a life itself.",
];

let index = 0; // get the items of array "texts"
let count = 0; // counts the length of the phrase
let currentText = "";
let letter = "";

(function type() {
	// Reset the index to 0
	if (index === texts.length) {
		index = 0;
	}

	currentText = texts[index];
	letter = currentText.slice(0, count++);

	document.querySelector(".dynamic-text").textContent = letter;
	if (letter.length === currentText.length) {
		index++;
		count = 0;
		return setTimeout(type, 1000);
	}

	let timeOut = setTimeout(type, 100);
})();
