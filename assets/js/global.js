'use strict';

// Add event on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
    for (const elen of elements) {
        elen.addEventListener(eventType, callback);
    }
};

// Toggle search box in mobile device
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function () {
   searchBox.classList.toggle("active"); 
});
