let slideCount = $(".lic-slider").children().length,
	slideNow = 1,
	duration = 4000,
	navBtnId = 0,
	labSelected;

$(document).ready( () => {

	let switchInterval = setInterval(nextSlide, duration);

	$(".lic-slide-cont").hover( () => {
		clearInterval(switchInterval);
	}, 
	() => {
		switchInterval = setInterval(nextSlide, duration);
	});

	//	Событие, возникающее при изменении состояния input'a
	$("input[name=lic-slider-input]").on("change", (e) => {
		console.log(e.target);
		onChangeInputToLabel(e.target);
	});

	//	Функция изменения состояния активного input'a
	function onChangeInputToLabel(element) {
		let id = $(element).attr("id");

		if(labSelected !== undefined) {
			$(labSelected).removeClass("lic-lab--active");
		}

		let labelActive = "label[for='" + id + "']";
		$(labelActive).addClass("lic-lab--active");
		labSelected = labelActive;
	}

	function nextSlide() {
		if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
			changeSlideStyle(slideNow - 1);
			slideNow = 1;
		} else {
			changeSlideStyle(slideNow - 1);
			slideNow++;
		}
	}

	function changeSlideStyle(index) {

		if(index - 1 >= 0 && index + 1 !== slideCount) {
			$(".lic-slider--slide").eq(index - 1).toggleClass("lic-slider--slide-active");
		}

		if(slideNow == slideCount) {
			$(".lic-slider--slide").eq(slideCount - 1).toggleClass("lic-slider--slide-active");
		}

		$(".lic-slider--slide").eq(index).toggleClass("lic-slider--slide-active");
	}

});