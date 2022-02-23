const numberOfStudents = 10;
const numberOfMentors = 8;

const sum = numberOfMentors+numberOfStudents;

const percStudent = numberOfStudents*100/sum;
const percMentor = numberOfMentors*100/sum;

const roughPercStudent = Math.round(percStudent);
const rougbPercMentor = Math.round(percMentor);

console.log("Percentage students:" + roughPercStudent + "%");
console.log("Percentage mentors:" + rougbPercMentor + "%");