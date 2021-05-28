function validate() {
    
    var rollNo = document.getElementById("rollNo").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var mobileNo = document.getElementById("mobileNo").value;
    var occupation = document.getElementById("occupation").value;
    
    var gender;
    if(document.getElementById("male").checked) {
        gender = "Male";
    }
    else {
        gender = "Female";
    }
    
    var atposition= email.indexOf("@");  
    var dotposition= email.lastIndexOf(".");
    
    if(rollNo.length == 0 ) {
        alert("Roll No can't be Empty");
        return false;
    }
    else if(firstName.length == 0 ) {
        alert("First Name can't be Empty");
        return false;
    }
    else if(lastName.length == 0) {
        alert("Last Name can't be Empty");
        return false;
    }
    else if(email.length == 0) {
        alert("Email can't be Empty");
        return false;
    }
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) {
        alert("Please enter a valid e-mail address");  
        return false;
    }
    else if(age.length == 0) {
        alert("Age can't be Empty");
        return false;
    }
    else if(!dob) {
        alert("DOB can't be empty");
        return false;
    }
    else if(mobileNo.length != 10) {
        alert("Please check Mobile Number");
        return false;
    }
    else if(!document.getElementById("male").checked && !document.getElementById("female").checked) {
        alert("Choose Gender");
        return false;
    }
    else {
        alert("Data Added succesfully to Local Storage");
    }
    
    function Student(rollNo, firstName, lastName, age, dob, gender) {
        this.rollNo = rollNo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
    }
    
    var students = [];
    
    if(localStorage.getItem('students') == null) {
        localStorage.setItem('students', JSON.stringify(students));
    }
    
    students = JSON.parse(localStorage.getItem('students'));
    
    var student = new Student(rollNo, firstName, lastName, age, dob, gender);
    
    student.occupation = occupation;
    
    students.push(student);
    
    localStorage.setItem('students', JSON.stringify(students));
}

function getStudent() {
    
    let userRoll = document.getElementById("getRoll").value;
    let flag = 0;
    
    let students = JSON.parse(localStorage.getItem('students'));
    
    for(let student of students) {
        if(student.rollNo == userRoll) {
            var txt = "";
            for(x in student) {
                txt += x + ": " + student[x] + "<br>";
                flag = 1;
            }
            break;
        }
    }
    
    console.log(students);
    console.log("User Retrieved Student: " + txt);
    
    if(userRoll.length == 0) {
        document.getElementById("details").innerHTML = "Please enter Roll Number!";
    }
    else if(flag == 0) {
        document.getElementById("details").innerHTML = "Roll No not present!";
    }
    else {
        document.getElementById("details").innerHTML = txt;
    }
}