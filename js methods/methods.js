const namesUp = ['kate', 'jane', 'iren'];
const nameSingle = 'kate';
const namesDown = ['KATE', 'JANE', 'IREN'];

const numbers = [1, 2, 3, 4, 5];


function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {        
        console.log(callback(array[i], i, array))
    }
}


// forEach(numbers, (item) => item * 23)

function filter(array, callback) {
    const newArr = []

    for (let i = 0; i < array.length; i++) {
        
        if(callback(array[i], i, array)) {
            newArr.push(array[i])
        }        
    }

    // return console.log(newArr)
    return newArr
};

// console.log(filter(numbers, (item) => item >= 2))

function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return array[i]
        }
    }

    return
}
// console.log(find(numbers, (item) => item >= 3))

console.log()
function findIdex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return i
        }
    }

    return -1
};
// console.log(findIdex(numbers, (item) => item === 3))

function map(array, callback) {
    const newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]))
    }

    return newArr
};
console.log()

// console.log(map(numbers, (item) => {
//     return item + 17
// }));



function fill(array, num) {
    const newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(num)
    }

    return newArr
};
console.log()
// console.log(fill(numbers, 4))

function reverse(array) {
    const newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.unshift(array[i])        
    }

    return newArr
};
// console.log(reverse(numbers));

const star = 'star';

function capitalize(word) {

    return word[0].toUpperCase() + word.slice(1)    

};

console.log(capitalize(star))
console.log(map(namesUp, capitalize))


