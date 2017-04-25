(function() {

  'use strict';

  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();/*get the text rectangle object*/
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );/*window.innerHeight is the browser inner height for Chrome, document.documentElement.clientHeight is the expression for IE*/
  }

  function callbackFunc1() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  function callbackFunc2() {
    for (var i = 0; i < items.length; i++) {
        items[i].classList.add("in-view");
    }
  }

  // listen for events
    if (window.matchMedia("(max-width: 600px)").matches) {
   window.addEventListener("load", callbackFunc2);
  window.addEventListener("resize", callbackFunc2);/*occurs when the browser window has been resized*/
  window.addEventListener("scroll", callbackFunc2);
} else {
   window.addEventListener("load", callbackFunc1);
  window.addEventListener("resize", callbackFunc1);/*occurs when the browser window has been resized*/
  window.addEventListener("scroll", callbackFunc1);
}

})();


function changeStyle(){
   var obj = document.getElementById("css");
   if (obj.getAttribute("href") == "css/experience.css") {
      obj.setAttribute("href", "css/experience2.css");
   } else {
      obj.setAttribute("href", "css/experience.css");
   }
}