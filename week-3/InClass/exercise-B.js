let names = ['Gabi','Dani','Kike'];
let moreNames=['Juan', 'Manuel'];
let all = names.concat(moreNames);
console.log(all);
let ordered = all.sort();
console.log(ordered);

function nameExists(newName, names) {
    if (names.includes(newName)) {
        return newName + " is at the class with " + names.join();
    } else {
        return newName + " is not at the class with" + names.join()
    }
}

console.log(nameExists('Gabi', all));
console.log(nameExists('Ananda', all));