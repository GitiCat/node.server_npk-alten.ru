document.addEventListener('DOMContentLoaded', function() {
    SetCurrentData(2016);
});

document.addEventListener('scroll', function () {
    let headerElement = document.getElementById('header');
    ChangeHeaderStyleToScroll(headerElement);

    ParalaxElementFlowTop(".about-rear-plan", 270, .2);
});

/**
 *  Assigning the current date
 * @param startDate
 * @constructor
 */
function SetCurrentData(startDate) {
    let element = document.getElementById('copyright__text');
    let currentDate = new Date().getFullYear();

    element.innerHTML = startDate + ' - ' + currentDate;
}

/**
 *  Change style of the title when scrolling the page
 * @param element
 * @constructor
 */
function ChangeHeaderStyleToScroll(element) {

    let logo = document.getElementById('title-logo');
    let nav = document.querySelector('#header-navbar');
    let navLinks = document.querySelectorAll(".navbar a");
    let separator = document.querySelector('.vertical-separator');

    if(window.scrollY > 0) {
        if(!element.classList.contains("scroll-active")) {
            element.style.cssText = "position: fixed;" +
                "top: 0;" +
                "z-index: 2;" +
                "width: 100%;" +
                "background-color: #1b1a23;" +
                "border-color: #635f76;";
            nav.style.cssText = "padding: 10px 0;";
            logo.style.cssText = "margin: 7px auto; " +
                "color: #fff;" +
                "opacity: 1;";
            separator.style.cssText = "background-color: #635f76;" +
                "opacity: 1;";

            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].style.cssText = "color: #fff;";
            }

            element.classList.add("scroll-active");
        }
    }
    else {
        element.style.cssText = "";
        nav.style.cssText = "";
        logo.style.cssText = "opacity: 0;";
        separator.style.cssText = "opacity: 0;";

        for(let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.cssText = "";
        }

        element.classList.remove("scroll-active");
    }
}

/**
 * Provides a method to create a parallax effect
 * @param {Uses element name} elementName 
 * @param {Start point flow top} startTop 
 * @param {Speed flow for element} scale 
 */
function ParalaxElementFlowTop(elementName, startTop, scale) {
    let scrolling = $(window).scrollTop();
    $(elementName).css('top', (startTop - (scrolling * scale)) + 'px')
}