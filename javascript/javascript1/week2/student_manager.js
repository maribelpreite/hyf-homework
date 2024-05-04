const class07Students = ["Anna", "Jonas", "Micah", "Noah", "Louise", "Jonathan", "Michael"];
function addStudentToClass(studentName) {
    if (class07Students.length>5 && studentName !== "Queen Margrethe") {
        console.log(`Cannot add more students to class 07`);
    } else if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
    } else if (studentName.trim() === "") {
        console.log(`Please add the student's name`); 
    } else {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents(class07Students) {
    console.log(`There are ${class07Students.length} in class 07. See the full list of students below:`);
    console.log(class07Students);
}

addStudentToClass("Micah");
getNumberOfStudents(class07Students);