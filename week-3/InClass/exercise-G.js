const YEARS = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
function gessYourAge(birthYear) {
    return 2022-birthYear;
}


let ages = [];

function canDrive(year) {
    const age = gessYourAge(year);
    return age >= 17;
    
}

function peopleWhoCanDrive(years) {
    return years.filter(year=>canDrive(year))
}

console.log(`These are the birth years of people who can drive: ${peopleWhoCanDrive(YEARS)}`);

