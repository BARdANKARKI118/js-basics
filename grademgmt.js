let studentname = [];
let studentgrade = [];

function addStudent(Sname, grades) {
    studentname.push(Sname);
    studentgrade.push(grades);
    console.log(Sname, grades);
}

addStudent("Rosis", 89);
addStudent("Manoj", 65);
addStudent("Alen", 69);

function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    let average = sum / grades.length;
    return average;
}

console.log("Student Names:", studentname);
console.log("Student Grades:", studentgrade);

let average = calculateAverage(studentgrade);
console.log("Average Grade:", average);

function determineClassPerformance(average) {
    if (average >= 90)
     {
        console.log("A grade with marks: " + average);
    } 
    else if (average >= 80 && average < 90)
    {
        console.log("B grade with marks: " + average);
    } 
    else if (average >= 70 && average < 80) 
    {
        console.log("C grade with marks: " + average);
    }
    else if (average >= 60 && average < 70)
    {
        console.log("D grade with marks: " + average);
    } 
    else 
    {
        console.log("F grade with marks: " + average);
    }
}

determineClassPerformance(average);
