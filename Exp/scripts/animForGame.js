/* 
 * I referenced codes from ilithya 2019
 */

let gameOver = false;
const emojiString = "🍺";
const btnPressClass = "is-pressed";
const emojiClass = "has-emoji";

const dialog = {
	hide: function(dialogBox) {
		dialogBox.style.display = "none";
	},
	updateContent: function() {
		const boxHeadline = document.querySelector("#play-box .box__headline");
		boxHeadline.innerHTML = "Play again?";

		const boxText = document.querySelector("#play-box .box__txt");
		boxText.innerHTML = "Beer is never in the same place.";
	},
	showPlayAgain: function(dialogBox) {
		dialog.updateContent();
		dialogBox.style.display = "block";
	}
};

const getRandomIntInclusive = maxNum => {
	const min = 0;
	const max = Math.floor(maxNum);

	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const emoji = {
	insert: function(el) {
		const btnCount = el.length - 1;
		const luckyBtn = getRandomIntInclusive(btnCount);

		el[luckyBtn].children[0].innerHTML = emojiString;
		el.forEach(function(item) {
			game.addBtnClick(item);
		});
	},
	remove: function(el) {
		el.forEach(function(item) {
			const itemChild = item.children[0];
			itemChild.innerHTML = "";
			itemChild.classList.remove(emojiClass);
			item.classList.remove(btnPressClass);
		});
	}
};

const game = {
	btn: document.querySelectorAll(".grid__btn"),
	box: document.getElementById("play-box"),
	start: function() {
		emoji.insert(game.btn);
		dialog.hide(game.box);	
	},
	run: function() {
		if (gameOver) {
			emoji.remove(game.btn);
			game.start();
		} else {
			game.start();
		}
	},
	stop: function() {
		gameOver = true;

		game.btn.forEach(function(item) {
			game.removeBtnClick(item);
		});
		
		setTimeout(function() {
			dialog.showPlayAgain(game.box);
		}, 5000);
	},
	play: function(e) {
		const thisItem = e.target;
		thisItem.classList.add(btnPressClass);
		game.removeBtnClick(thisItem);

		const emojiEl = thisItem.children[0];
		if (emojiEl.innerHTML === emojiString) {
			emojiEl.classList.add(emojiClass);
			game.stop();
		}
	},
	addBtnClick: function(el) {
		el.addEventListener("click", game.play, false);
	},
	removeBtnClick: function(el) {
		el.removeEventListener("click", game.play, false);
	}
};

const btnPlay = document.getElementById("play-btn");
btnPlay.addEventListener("click", game.run, false);