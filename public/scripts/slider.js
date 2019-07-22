let slideNow = 1,
	slideCount = $(".lic-slider").children().length,
	slideInterval = 4000,
	navBtnId = 0,
	translateWidht = 0,
	selected;

$(document).ready(function() {
	let switchInterval = setInterval(nextSlide, slideInterval);
	changeInputBtn(slideNow - 1);

	$(".lic-slider-viewport").hover(function() {
		clearInterval(switchInterval);
	}, function() {
		switchInterval = setInterval(nextSlide, slideInterval);
	});

	$("input[name=lic-slider-input]").on("change", function(e) {
		navBtnId = $(this).index();
		changeInputBtn(navBtnId);

		if(navBtnId + 1 != slideNow) {
			translateWidht = -$(".lic-slider-viewport").width() * (navBtnId);
			$(".lic-slider").css({
				"transform": "translate(" + translateWidht + "px, 0)",
				"-webkit-transform": "translate(" + translateWidht + "px, 0)",
				"-ms-transform": "translate(" + translateWidht + "px, 0)"
			});
			slideNow = navBtnId + 1;
		}
	});
})

function selectedRemoveClass() {
	if(selected !== undefined) {
		// Если имеется выбранный элемент, то удаляем класс
		$(selected).removeClass("checked");
	}
}

function changeInputBtn(index) {
	selectedRemoveClass();

	let element = $("input[name=lic-slider-input]")[index];
	let id = $(element).attr("id");
	let label = $("label[for=" + id + "]");

	$(element).prop("checked", true);
	if($(element).is(":checked")) {
		$(label).addClass("checked");
		selected = label;
	}
}

//	Функция смены слайда на следующий
function nextSlide() {
	if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
		$(".lic-slider").css("transform", "translate(0, 0)");
		slideNow = 1;
		changeInputBtn(slideNow - 1);

	} else {
		translateWidht = -$(".lic-slider-viewport").width() * (slideNow);
		$(".lic-slider").css({
			"transform": "translate(" + translateWidht + "px, 0)",
			"-webkit-transform": "translate(" + translateWidht + "px, 0)",
			"-ms-transform": "translate(" + translateWidht + "px, 0)"
		});
		slideNow++;
		changeInputBtn(slideNow - 1);
	}
}

//	Функция смены слайда на предыдущий
function prevSlide() {
	if(slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
		translateWidht = -$(".lic-slider-viewport").width() * (slideNow - 1);
		$(".lic-slider").css({
			"transform": "translate(" + translateWidht + "px, 0)",
			"-webkit-transform": "translate(" + translateWidht + "px, 0)",
			"-ms-transform": "translate(" + translateWidht + "px, 0)"
		});
		slideNow = slideCount;
		changeInputBtn(slideNow - 1);
	} else {
		translateWidht = -$(".lic-slider-viewport").width() * (slideNow - 2);
		$(".lic-slider").css({
			"transform": "translate(" + translateWidht + "px, 0)",
			"-webkit-transform": "translate(" + translateWidht + "px, 0)",
			"-ms-transform": "translate(" + translateWidht + "px, 0)"
		});
		slideNow--;
		changeInputBtn(slideNow - 1);
	}
}