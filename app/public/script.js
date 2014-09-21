

$(document).ready(function(){
	$(".card").hide();
	var openCard = false;



	$("#ticker").click(function(){
		if (openCard==false){
		$(".card").fadeIn(100);
			openCard = true;
			console.log("Card open (openCard=" + openCard +")");
			$("#body_container").addClass("makeBlur");
		}
		else if (openCard==true){
			$(".card").fadeOut(100);
			openCard = false;
			console.log("Card closed (openCard=" + openCard +")");
			$("#body_container").removeClass("makeBlur");
		}
	});



});