function onClick(){
    var firstName= document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var mobileNumber = document.getElementById("number");
    var email = document.getElementById("email");
    var state = document.getElementById("state");
    var city = document.getElementById("city");

    localStorage.setItem("fname", firstName.value);
    localStorage.setItem("lname", lastName.value);
    localStorage.setItem("number", mobileNumber.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("state", state.value);
    localStorage.setItem("city", city.value);

 






   }


 




function getValue(){
    document.getElementById("myAnchor").addEventListener("click", function(event){
        event.preventDefault()
      });
      var storedFirstName = localStorage.getItem("fname");
      var storedLastName = localStorage.getItem("lname");
      var storedNumber = localStorage.getItem("number");
      var storedEmail = localStorage.getItem("email");
      var storedState = localStorage.getItem("state");
      var storedCity= localStorage.getItem("city");


      document.getElementById("fname").value= storedFirstName;
      document.getElementById("lname").value= storedLastName;
      document.getElementById("number").value= storedNumber;
      document.getElementById("email").value= storedEmail;
      document.getElementById("state").value= storedState;
      document.getElementById("city").value= storedCity;




}
