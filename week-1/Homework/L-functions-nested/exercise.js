
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function nameInUpperCase(name){
    return (name.toUpperCase());
}

function writeGreeting(name){
    var greeting = "HELLO " + nameInUpperCase(name);
    console.log(greeting);
}

writeGreeting(mentor1)
writeGreeting(mentor2)
writeGreeting(mentor3)
writeGreeting(mentor4)
writeGreeting(mentor5)