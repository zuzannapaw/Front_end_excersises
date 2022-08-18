
$(".interface").on("click", function () {
//console.log("working");
//
//	console.log(this);
//	console.log($(this))
//	console.log($(this).attr("class"))
//	console.log(this.className) 
//	
	
	if ($(this).hasClass("orange")){
		console.log("true");
//		$('body').toggleClass("orange");
//		$('body').css("background-color", "orange");
		$("body").attr("class", "orange")
//		$('p').css({
//			"font-size": "130px",
//		})
		
	}
	
	
	if(this.classList.contains("green")){
	console.log("true");
		$("body").attr("class", "green");
		
	}
		
	if($(this).hasClass("increase")) {
		console.log(true);
		$('.text').animate({
			"font-size": "+=2px"
		}, 300)
		
	}
	if($(this).hasClass("move")) {
		console.log(true);
		$('.text').animate({
			"left": "+=15px",
			"letter-spacing": "+=2px"
		})
		
	}
	
	
    
})


				 