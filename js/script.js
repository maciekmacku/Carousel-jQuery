$(function () {
	var carouselList = $('#carousel ul'); 
	$('#btn-left').click("left", changeSlide); 
	$('#btn-right').click(changeSlide);
	setInterval(changeSlide, 5000);
	
	function changeSlide(data) {
		console.log(data);
		if (data && data.data == "left") {
			carouselList.animate({
				'marginLeft': 400
			}, 450, moveLastSlide);
				
		}
		else	{
			carouselList.animate({
				'marginLeft': -400
			}, 450, moveFirstSlide);
		}
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
		
	}
	
	function moveLastSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({marginLeft: 0});
	}
	
	
});