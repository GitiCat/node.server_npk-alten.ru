document.addEventListener('DOMContentLoaded', function() {
    SetCurrentData(2016);
});

document.addEventListener('scroll', function () {
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
 * Provides a method to create a parallax effect
 * @param {Uses element name} elementName 
 * @param {Start point flow top} startTop 
 * @param {Speed flow for element} scale 
 */
function ParalaxElementFlowTop(elementName, startTop, scale) {
    let scrolling = $(window).scrollTop();
    $(elementName).css('top', (startTop - (scrolling * scale)) + 'px')
}