

function changeStyle(){
   var obj = document.getElementById("css");
   if (obj.getAttribute("href") == "css/styles-home.css") {
      obj.setAttribute("href", "css/styles-home2.css");
   } else {
      obj.setAttribute("href", "css/styles-home.css");
   }
}

var tag = document.getElementById('headline');
var word="Stay Hungry, Stay Foolish";

// for (i = 0; i < tag.length; i++) {
//   tag[i].setAttribute('data-headline', i);
//   typewriter(i);
// }

// function typewriter(element) {
//   var tag = document.querySelector('[data-headline="' + element + '"]');
//   spellWord(tag, word);
// }
tag.style.fontSize="350%";
spellWord(tag, word);


function spellWord(tag, word) {
    var letters = word.length,
    count = 0,
    animation = setInterval(function() {
      tag.innerHTML += word[count];
      letters--;
      count++;
      if (letters == 0) {
        clearInterval(animation)
      }
    }, 175);
}

// $(window).scroll(function() {
// if ($(this).scrollTop() > 1){  
//     $('header').addClass("sticky");
//   }
//   else{
//     $('header').removeClass("sticky");
//   }
// });