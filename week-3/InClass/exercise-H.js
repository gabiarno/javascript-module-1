let names = ['gabi','dani','kike'];

const NAME_TO_FIND = 'Jose';

function findName(names) {
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        if (element === NAME_TO_FIND) {
            return "Found me!"
        } else {
            return "Haven't Found me!"
        }
        
    }
    
}

console.log(findName(names));