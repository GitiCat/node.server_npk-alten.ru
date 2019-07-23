let slideCount = $(".lic-slider").children().length,
	slideNow = 1,
	duration = 3000,
	navBtnId = 0,
	labSelected;

$(document).ready( () => {

	let switchInterval = setInterval(nextSlide, duration);

	$(".lic-slider-cont").hover( () => {
		clearInterval(switchInterval);
	}, 
	() => {
		switchInterval = setInterval(nextSlide, duration);
	});

	//	Событие, возникающее при изменении состояния input'a
	$("input:radio[name=lic-slider-input]").change((e) => {
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
			changeSlideStyle(slideNow);
			slideNow = 1;
		} else {
			changeSlideStyle(slideNow);
			slideNow++;
		}
	}

	function changeSlideStyle(index) {
		
		let elements = $(".lic-slider--slide");
		let active = "lic-slider--slide-active";

		if(index - 1 == 0) {
			$(elements).last().removeClass(active);
		}

		if(index - 1 !== 0) {
			$(elements[index - 2]).removeClass(active);
		}

		$(elements[index - 1]).addClass(active);
		$('input:radio[name=lic-slider-input]').eq(index - 1).prop("checked", true).change();
	}

});