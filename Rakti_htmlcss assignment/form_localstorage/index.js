function sub()
{
var nameT=document.getElementById("name").value;
var rollnoT=document.getElementById("rollno").value;
var ageT=document.getElementById("age").value;
var cnameT=document.getElementById("cname").value;
if (typeof(Storage) !== "undefined") {

  // Storing
  localStorage.setItem("Name",nameT );
  localStorage.setItem("Roll Number",rollnoT );
  localStorage.setItem("Age",ageT );
  localStorage.setItem("College Name",cnameT );

  // Retrieving
  document.getElementById("p1").innerHTML = "Full Name is :  "+localStorage.getItem("Name");
  document.getElementById("p2").innerHTML = "Roll Number is:  "+localStorage.getItem("Roll Number");
  document.getElementById("p3").innerHTML = "Age is :  "+localStorage.getItem("Age");
  document.getElementById("p4").innerHTML = "College Name is :  "+localStorage.getItem("College Name");

  document.getElementById("d1").style.display="none";
  document.getElementById("d2").style.display="block";
} 

else {
  alert("Sorry, your browser does not support Web Storage...");
}
}