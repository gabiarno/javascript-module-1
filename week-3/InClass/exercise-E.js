function gessYourAge(birthYear) {
    return 2022-birthYear;
}

const YEARS = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

let ages = [];

YEARS.forEach(year=>ages.push(gessYourAge(year)));


console.log(ages);