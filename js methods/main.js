
// Методы JS
const numbersArr = [5, 1, 2, 3, 4, 5];
const chaosArr = ['a', true, 3, 5, 5, 6, 7, '>'];


forEach
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}

// return выходит только из функции
// findIndex
function findIndex (arr, item) {    
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i;
        }
    }

    return -1;
}
console.log()
// console.log(findIndex(numbersArr, 3312)) // 1 (index)


// const asdqq = [1, 2, 3, 'dsf', '<', true]
// FIND
function find (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return arr[i]
        }
    }
}
// console.log(find(asdqq, () => {})) //

// найти все четные числа в масс
// найти в массиве массивы длинна которых четная
// все числа которые больше 5
// посчитать сумму числе по диагонале в двумерном массиве
//
const array = [
    [ 1, 2, 3, 4, 5, 6, 7, 8 ],
    [ 9, 10, 11, 12, 13, 14, 15, 16 ],
    [ 17, 18, 19, 20, 21, 22, 23, 24 ],
    [ 25, 26, 27, 28, 29, 30, 31, 32 ],
    [ 33, 34, 35, 36, 37, 38, 39, 40 ],
    [ 41, 42, 43, 44, 45, 46, 47, 48 ],
    [ 49, 50, 51, 52, 53, 54, 55, 56 ],
    [ 57, 58, 59, 60, 61, 62, 63, 64 ]
];
console.log()
console.log()
console.log()

function getNothing (arr, x, y) {
    return q = arr[x][y]
}

// const numbers = [1, 2, 3, 4, 5, 6]
// let q = []


// const eee2 = numbers.forEach(function (item) {
//     q.push(item)
    
// });

// console.log(eee2)
// console.log(q)

// function getNum (arr) {
//     let q = []

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 === 0) {
//             q.push(arr[i])
//         }


//     }

//     return q
// }

// console.log(getNum(numbers))





// function asdfqwef(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// asdfqwef(numbers)
// getNothing(array, 0, 3)

// const massive = [{ x: 0, y: 0, value: 1 }, { x: 0, y: 1, value: 2 }]

// const massive = [{ x: 0, y: 0, value: 1 }, { x: 0, y: 1, value: 2 }, { x: 0, y: 2, value: 1 }, { x: 0, y: 3, value: 2 }, { x: 0, y: 4, value: 1 }, { x: 0, y: 5, value: 2 }]


//   1. Создать массив на основе данного, где значениями будут объекты вида { x: 0, y: 0, value: 1 }, { x: 0, y: 1, value: 2 }
/* function getNothing (arr, x, y) {
    return q = arr[x][y]
}*/

//   2. Сложить все вложенные значения в один массив (let q = array.flat())
//   3. Найти сумму чисел в первом ряду ( let r = array[0].reduce((x, y) => x + y, 0) )
//   4. Найти все чётные числа по диагонали слева на право

// книга. прочитать массивы и перечитывать пока не дойдёт
// переписать трекер на новый код из списка желаний



// const array = [
//     [ 1, 2, 3, 4, 5, 6, 7, 8 ],
//     [ 9, 10, 11, 12, 13, 14, 15, 16 ],
//     [ 17, 18, 19, 20, 21, 22, 23, 24 ],
//     [ 25, 26, 27, 28, 29, 30, 31, 32 ],
//     [ 33, 34, 35, 36, 37, 38, 39, 40 ],
//     [ 41, 42, 43, 44, 45, 46, 47, 48 ],
//     [ 49, 50, 51, 52, 53, 54, 55, 56 ],
//     [ 57, 58, 59, 60, 61, 62, 63, 64 ]
// ];


const numbers = [[11, 21, 31, 41, 51, 61, 71, 81], [200], [300], [4], [5], [643]];

let q = []
const eee2 = numbers.forEach(function (item) {
 let q = 0;
 let w = 0;
    if (item[q][w] !== undefined) {
        q.push(item.toString())
        w++
        q++
    }
    
});

const hello = numbers.forEach((item, x, y) => {
    
})


// function getOne(arr, x, y) {
//     let w = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[x][y] !== undefined ) {
//             w.push(arr[x][y])
//             y++
//         }
//         // y++
//     }

//     return w
// }

// console.log(getOne(numbers, 0, 0))


// function getNum (arr, x, y ) {
//     let al = arr[x][y]

//     let q = []

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 === 0) {
//             q.push(al[i])
//         }

//         x++
//         y++
//     }

//     return q
// }

// console.log(getNum(numbers, 0,0))