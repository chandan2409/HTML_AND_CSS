function myFun()
{
var fname= document.getElementById("fname").value;
var lname= document.getElementById("lname").value;
var email= document.getElementById("email").value;
var dob= document.getElementById("dob").value;
var gender= document.getElementById("gender").value;
var age= document.getElementById("age").value;
var color= document.getElementById("color").value;

localStorage.setItem("firstName" , fname);
localStorage.setItem("lastName" , lname);
localStorage.setItem("mail" , email);
localStorage.setItem("dofb" , dob);
localStorage.setItem("genders" , gender);
localStorage.setItem("aging" , age);
localStorage.setItem("colour" , color);

window.alert("My name is " +fname+ ". My age is " +age+ ". My EmailId is " +email+ ". My dob is " +dob);


}
