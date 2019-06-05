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

    let el_header = document.querySelector('.header');
    let el_logo = document.querySelector('.title-logo');
    let el_nav = document.querySelector('.header-navbar');
    let el_nav_links = document.querySelectorAll('.header-navbar a');
    let el_separator = document.querySelector('.vertical-separator');

    if(window.scrollY > 0) {
        el_header.classList.add('header-active-scroll');
        el_logo.classList.add('header-title-logo--active-scroll');
        el_nav.classList.add('header-navbar--active-scroll');

        for(let index = 0; index < el_nav_links; index++) {
            el_nav_links[index].classList.add('header-nav-link--active-scroll');
        }

        el_separator.classList.add('header-vertical-separator--active-scroll');
    }
    else {
        el_header.classList.remove('header-active-scroll');
        el_logo.classList.remove('header-title-logo--active-scroll');
        el_nav.classList.remove('header-navbar--active-scroll');

        for(let index = 0; index < el_nav_links; index++) {
            el_nav_links[index].classList.remove('header-nav-link--active-scroll');
        }

        el_separator.classList.remove('header-vertical-separator--active-scroll');
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