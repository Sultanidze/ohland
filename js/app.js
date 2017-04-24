$(document).ready(function(){
	// selectric initialization
	$(".js-selectric").selectric();
	// vehicles labels select
	$(".b-vehicle").click(function(){
		$(".b-vehicle").removeClass("b-vehicle_active");
		$(this).addClass("b-vehicle_active");
		$("#" + $(this).attr("data-id")).trigger("click");	//перемикання радіобатонів об’єму при кліку на тз
	});
// reasons slider
	var $sliderReasons = $(".b-reasons__slider .b-slider__string").slick({
		arrows: false,
		infinite: true,
		speed: 400,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4400
	});
	// add my buttons to ads slider
	var  $sliderReasonsPrevBtn = $sliderReasons.parents(".b-reasons__slider").find(".b-slider__control_left")
		,$sliderReasonsNextBtn = $sliderReasons.parents(".b-reasons__slider").find(".b-slider__control_right")
		;
	$sliderReasonsPrevBtn.click(function(event){
		event.preventDefault();
		$sliderReasons.slick("slickPrev");
	});	
	$sliderReasonsNextBtn.click(function(event){
		event.preventDefault();
		$sliderReasons.slick("slickNext");
	});
});