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


var dropZone_open = document.getElementById("open");
var dropZone_high = document.getElementById("high");
var dropZone_marketCap = document.getElementById("marketCap");
var dropZone_latestPrice = document.getElementById("latestPrice");
var dropZone_change = document.getElementById("change");
var dropZone_growth = document.getElementById("growth");




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

	yahooFinance.historical({
  		symbol: 'AAPL',
  		from: '2014-09-19',
  		to: '2014-09-19',
  	// period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly)
		}, function (err, quotes, url, symbol) {
  	//

	});


	Mousetrap.bind('left', function() {
		(2); 
	});

	Mousetrap.bind('right', function() {
		(2); 
	});


	if(document.keyCode == 32){
       // user has pressed space
       console.log("Spacebar pressed");
   }


});