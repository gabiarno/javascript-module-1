const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];


function writeNames(students) {
    
    for (let index = 0; index < students.length; index++) {
        const element = students[index];
        console.log(element);
        
    }
}

writeNames(students);