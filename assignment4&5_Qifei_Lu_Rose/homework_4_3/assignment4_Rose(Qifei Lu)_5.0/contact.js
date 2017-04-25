function validate(){
           // if (document.getElementById("name").validity.valueMissing) {
           //    alert("Please type your name");
           //    return;
           // }
           // if (document.getElementById("email").validity.valueMissing) {
           //    alert("Please type your email address");
           //    return;
           // }
           // if (!validateEmail(document.getElementById("email").value)) {
           //    alert("Please type your valid email address");
           //    return;
           // }
           // if (document.getElementById("question").validity.valueMissing) {
           //    alert("Please type your question");
           //    return;
           // }
           // if (document.getElementById("personType").validity.valueMissing) {
           //    alert("Please choose a person type");
           //    return;
           // }

           // var checkbox1 = document.getElementById("yes"),
           //     checkbox2 = document.getElementById("no");
           // if ( checkbox1== null &&  checkbox2== null) {
           //    alert("Please choose whether it is urgent or not!");
           //    return;
           // }
           var radios = document.getElementByName("urgent");
           console.log(radios);
           if (!validateRadio(radios)){
            alert("Please choose whether it is urgent or not!");
           }
           submitSuccessful();
         }
         function validateRadio(radios) {
          for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
              return true;
            }
          }
          return false;
         }
         function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
         }
         function submitSuccessful(){
            alert("You have submitted your question successfully!");
         }