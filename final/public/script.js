var initChart = function(ticker){
	var chartMaker_base = "http://chart.finance.yahoo.com/z?s=";
	var chartMaker_URL = chartMaker_base + ticker;
	console.log(chartMaker_URL);
	var dropZone_chart = document.getElementById("chartIMG");
	dropZone_chart.innerHTML = "<img src='"+ chartMaker_URL+"'/>";
	console.log(dropZone_chart);

}

var initCard = function(ticker){
	console.log(ticker);
	var dropZone = document.getElementById("stock_ticker");
	dropZone.innerHTML = ticker;
	initChart(ticker);
	
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