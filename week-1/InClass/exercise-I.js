function bornYear(age){
    return 2022 - age;

}

function createGreeting(name, age){
    const born = bornYear(age);
    return `Hi ${name}, you were born in ${born}`
}

console.log(createGreeting("Gabi", 37));