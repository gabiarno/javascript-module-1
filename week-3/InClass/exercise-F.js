const YEARS = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
function gessYourAge(birthYear) {
    return 2022-birthYear;
}


let ages = [];

YEARS.forEach((year)=>{
    const age = gessYourAge(year);
    if (age < 17) {
        console.log( `Born in ${year} can drive in ${17-age} years`);
    } else {
        console.log( `Born in ${year} can drive`)
    }
    
})