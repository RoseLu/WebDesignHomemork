function validate(){
           if (document.getElementById("name").validity.valueMissing) {
              alert("Please type your name");
              return;
           }
           if (document.getElementById("email").validity.valueMissing) {
              alert("Please type your email address");
              return;
           }
           if (!validateEmail(document.getElementById("email").value)) {
              alert("Please type your valid email address");
              return;
           }

           submitSuccessful();
}
         
         function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
         }
         function submitSuccessful(){
            alert("You have submitted your question successfully!");
         }