(() => {
	//variables go first
	//setting up the stickers
	
	const pieces = ["topLeft", "topMid", "topRight", "botLeft", "botMid", "botRight"];

	let stickers = document.querySelector("presentBox"),
	presentBox = document.querySelector("presentBox")
	stikerSelectors = document.querySelectorAll("#buttonHolder img");

let dropZones = document.querySelectorAll('presentBox')




//functions in the middle

function placeStickers


initDrag();

};

let stickers =

//drag and drop functions

function initDrag () {
	presentBox.querySelectorAll('img').forEach(img => {
		img.addEventLister("dragstart", function(e){
			console.log('draggin...');
			e.dataTransfer.setData("text/plain", this.id);

		});
	});
}

// handle dragover and drop
dropZones.forEach(zone =>) {
	zone.addEventLister("dragover", function(e) {
		e.preventDefault();
		console.log("Looking good!");
});

	zone.addEventLister("drop", function(e) {
		e.preventDefault();
		console.log("BEAUTIFUL!")

		let piece = e.dataTransfer.getData("text/plain");
		e.target.appendChild(document.querySelector(`#${sticker}`));
	});

	}
	function resetStickers() {
		//empty present
		presentBox.innerHTML ="";
		createEmptyBox(this.dataset.stickerref)
	}








function resetStickers() {
	//clear the present
	

	}

	//event handling
 //click to reset