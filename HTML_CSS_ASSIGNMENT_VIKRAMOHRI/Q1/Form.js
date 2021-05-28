function validate() {
    
    let rollNo = document.getElementById("rollNo").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let mobileNo = document.getElementById("mobileNo").value;
    let occupation = document.getElementById("occupation").value;
    
    let gender = document.getElementById("male").checked ? "Male" : "Female";
    
    if(rollNo.length == 0 || firstName.length == 0 || lastName.length == 0 || email.length == 0 || age.length == 0 || (!dob) || mobileNo.length == 0 || (!document.getElementById("male").checked && !document.getElementById("female").checked)) {
        alert("Mandatory fields can't be empty!");
        return false;
    }
    
    if(mobileNo.length != 10) {
        alert("Incorrect Mobile Number!");
        return false;
    }
    
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(mailformat))
    {
        alert("You have entered an invalid email address!");
        return false;
    }

    alert("Data Added succesfully");
    
    
    function Student(rollNo, firstName, lastName, age, dob, gender) {
        this.rollNo = rollNo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
    }
    
    let studentList = [];
    
    if(localStorage.getItem('studentList') == null) {
        localStorage.setItem('studentList', JSON.stringify(studentList));
    }
    
    studentList = JSON.parse(localStorage.getItem('studentList'));
    
    let student = new Student(rollNo, firstName, lastName, age, dob, gender);
    
    student.occupation = occupation;
    
    studentList.push(student);
    
    localStorage.setItem('studentList', JSON.stringify(studentList));
}

function getStudent() {
    
    let userRoll = document.getElementById("getRoll").value;
    
    let studentList = JSON.parse(localStorage.getItem('studentList'));

    console.log("List");

    console.log(studentList);



    let flag =0;
    
    for(let student of studentList) {
        if(student.rollNo == userRoll) {
            var txt = "";
            for(x in student) {
                txt += x + ": " + student[x] + "<br>";
            }
            flag=1;
        }
    }

    

    
    if(userRoll.length == 0) {
        document.getElementById("details").innerHTML = "Please enter Roll Number!";

        console.log("Please enter Roll Number!");
    }
    else if(flag == 0) {
        document.getElementById("details").innerHTML = "Roll No not present!";
        console.log("No such roll number found!!")
    }
    else {
        console.log("Matched rollnumber!!");
        console.log(txt);
        document.getElementById("details").innerHTML = txt;
    }
}