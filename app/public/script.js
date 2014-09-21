var initCard = function(ticker){
	console.log(ticker);
	var dropZone = document.getElementById("stock_ticker");
	dropZone.innerHTML = ticker;
}

$(document).ready(function(){
	$(".card").hide();
	var openCard = false;
	var blurry = false;


	$(document).click(function(){
		if (openCard==false){
			$(".card").fadeIn(100);
			openCard = true;
			console.log("Card open (openCard=" + openCard +")");
			$("#body_container").addClass("makeBlur");
			blurry = true;
		}
		else if (openCard==true){
			$(".card").fadeOut(100);
			openCard = false;
			console.log("Card closed (openCard=" + openCard +")");
			$("#body_container").removeClass("makeBlur");
			blurry = false;
		}
	});

	Mousetrap.bind('space', function() {

		if (openCard==false){
			$(".card").fadeIn(100);
			openCard = true;
			console.log("Card open (openCard=" + openCard +")");
			$("#body_container").addClass("makeBlur");
			blurry = true;
		}
		else if (openCard==true){
			$(".card").fadeOut(100);
			openCard = false;
			console.log("Card closed (openCard=" + openCard +")");
			$("#body_container").removeClass("makeBlur");
			blurry = false;
		}

	});




	if(document.keyCode == 32){
       // user has pressed space
       console.log("Spacebar pressed");
   }


});