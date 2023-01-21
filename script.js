const btn = document.querySelector(".btn");

const obj = {
	it: document.querySelector(".it"),
	is: document.querySelector(".is"),
	quarter: document.querySelector(".quarter"),
	twenty: document.querySelector(".twenty"),
	five: document.querySelector(".five"),
	twentyFive: document.querySelector(".twentyfive"),
	half: document.querySelector(".half"),
	ten: document.querySelector(".ten"),
	to: document.querySelector(".to"),
	past: document.querySelector(".past"),
	oneHour: document.querySelector(".one-hour"),
	twoHour: document.querySelector(".two-hour"),
	threeHour: document.querySelector(".three-hour"),
	fourHour: document.querySelector(".four-hour"),
	fiveHour: document.querySelector(".five-hour"),
	sixHour: document.querySelector(".six-hour"),
	sevenHour: document.querySelector(".seven-hour"),
	eightHour: document.querySelector(".eight-hour"),
	nineHour: document.querySelector(".nine-hour"),
	tenHour: document.querySelector(".ten-hour"),
	elevenHour: document.querySelector(".eleven-hour"),
	twelveHour: document.querySelector(".twelve-hour"),
};
console.log(obj.oneHour);
console.log(obj.twelveHour);
// function for back to normal condition
function backToNormal() {
	for (let key in obj) {
		obj[key].style.color = "#666";
		// console.log(typeof key);

		// [key].style.color = "#666";
	}
}

function functionality() {
	const time = new Date();
	const hour = time.getHours();
	const min = time.getMinutes();

	// const min = 55;
	// const hour = 23;

	obj.it.style.color = "#fff";
	obj.is.style.color = "#fff";
	// code to display min
	switch (min) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 59:
		case 58:
		case 57:
		case 56:
		case 55:
			obj.five.style.color = "#fff";
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 54:
		case 53:
		case 52:
		case 51:
		case 50:
			obj.ten.style.color = "#fff";
			break;
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 49:
		case 48:
		case 47:
		case 46:
		case 45:
			obj.quarter.style.color = "#fff";
			break;
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 44:
		case 43:
		case 42:
		case 41:
		case 40:
			obj.twenty.style.color = "#fff";
			break;
		case 21:
		case 22:
		case 23:
		case 24:
		case 25:
		case 39:
		case 38:
		case 37:
		case 36:
		case 35:
			obj.twentyFive.style.color = "#fff";
			break;
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 34:
		case 33:
		case 32:
		case 31:
			obj.half.style.color = "#fff";
			break;
	}

	// code to display past or to
	if (min != 0) {
		min <= 30 ? (obj.past.style.color = "#fff") : (obj.to.style.color = "#fff");
	}

	// code to display hour
	switch (hour) {
		case 1:
		case 13:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.twoHour.style.color = "#fff";
			} else obj.oneHour.style.color = "#fff";
			break;
		case 2:
		case 14:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.threeHour.style.color = "#fff";
			} else obj.twoHour.style.color = "#fff";

			break;
		case 3:
		case 15:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.fourHour.style.color = "#fff";
			} else obj.threeHour.style.color = "#fff";
			break;
		case 4:
		case 16:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.fiveHour.style.color = "#fff";
			} else obj.fourHour.style.color = "#fff";
			break;
		case 5:
		case 17:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.sixHour.style.color = "#fff";
			} else obj.fiveHour.style.color = "#fff";
			break;
		case 6:
		case 18:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.sevenHour.style.color = "#fff";
			} else obj.sixHour.style.color = "#fff";
			break;
		case 7:
		case 19:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.eightHour.style.color = "#fff";
			} else obj.sevenHour.style.color = "#fff";
			break;
		case 8:
		case 20:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.nineHour.style.color = "#fff";
			} else obj.eightHour.style.color = "#fff";
			break;
		case 9:
		case 21:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.tenHour.style.color = "#fff";
			} else obj.nineHour.style.color = "#fff";
			break;
		case 10:
		case 22:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.elevenHour.style.color = "#fff";
			} else obj.tenHour.style.color = "#fff";
			break;
		case 11:
		case 23:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.twelveHour.style.color = "#fff";
			} else obj.elevenHour.style.color = "#fff";
			break;
		case 12:
		case 00:
			if (obj.past.style.color != "#fff" && min >= 30) {
				obj.oneHour.style.color = "#fff";
			} else obj.twelveHour.style.color = "#fff";
			break;
	}

	// code for back to normal condition
	setTimeout(backToNormal, 2000);
}

btn.addEventListener("click", functionality);
