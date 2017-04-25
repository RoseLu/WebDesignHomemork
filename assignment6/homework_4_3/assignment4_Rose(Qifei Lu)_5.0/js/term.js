function changeStyle(){
           var obj = document.getElementById("css");
           if (obj.getAttribute("href") == "css/styles-term.css") {
              obj.setAttribute("href", "css/styles-term2.css");
           } else {
              obj.setAttribute("href", "css/styles-term.css");
           }
        }