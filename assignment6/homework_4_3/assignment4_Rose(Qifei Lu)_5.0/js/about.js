
function changeStyle(){
   var obj = document.getElementById("css");
   if (obj.getAttribute("href") == "css/about.css") {
      obj.setAttribute("href", "css/about2.css");
   } else {
      obj.setAttribute("href", "css/about.css");
   }
}