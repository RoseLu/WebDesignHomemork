function validate(){
           if (document.getElementById("name").validity.valueMissing) {
              alert("Please type your name");
              return;
           }
           if (document.getElementById("email").validity.valueMissing) {
              alert("Please type your email address");
              return;
           }
           if (!validateForm(document.getElementById("email").value)) {
              alert("Please type your valid email address");
              return;
           }
           if (document.getElementById("question").validity.valueMissing) {
              alert("Please type your question");
              return;
           }
           if (document.getElementById("personType").validity.valueMissing) {
              alert("Please choose a person type");
              return;
           }

           var checkbox1 = document.getElementById("yes");
           var checkbox2 = document.getElementById("no");
           if (checkbox1.checked == false && checkbox2.checked == false) {
              alert("Please choose whether it is urgent or not!");
              return;
           }
           
           submitSuccessful();
         }
         
         function validateForm(x) {
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
                alert("Not a valid e-mail address");
                return false;
             }
          }
         function submitSuccessful(){
            alert("You have submitted your question successfully!");
         }