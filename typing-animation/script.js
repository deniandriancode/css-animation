const textContainer = document.getElementById("text-container");
const container = document.querySelector(".container");
let filler = document.querySelector(".filler");
const btnPlay = document.getElementById('start-typing')
const totype = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae velit est iusto sint.";
let typing, insertText, isAllowed;
let counter = 0;

setTimeout(dotype, 1000);

function dotype() {
	isAllowed = false;
	btnPlay.addEventListener('click', () => {
		if (isAllowed) {
			textContainer.innerHTML = "<span class='filler'>.</span>";
			filler = document.querySelector('.filler');
			setTimeout(dotype, 1000);
		} else {
			return;
		}
	});
	filler.textContent = "";
	insertText = document.createElement('span');
	typing = setInterval(type, 200);
}

function type() {
	if (counter >= totype.length) {
		clearInterval(typing);
		counter = 0;
		isAllowed = true;
		return;
	}
	insertText.textContent = insertText.textContent + totype[counter];
	textContainer.insertBefore(insertText, filler);
	counter++;
}
