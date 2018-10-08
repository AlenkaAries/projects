
/*
$(function(){
	$("#navToggle").click(function(){
		$(".navBurger").toggleClass("active");
		$(".overlay").toggleClass("open");
	});

	$(".overlay ul a").click(function() {
		$(".overlay").fadeOut(600);
		$(".navBurger").removeClass("active");
		$(".overlay").removeClass("open");
	});
});
*/

$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
	$("body").toggleClass("locked"); 
});
