
// const arr = [2, 10, 5, 3, 9]


//          !DONE
// 1. Клонирование массива

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {

    return arr.slice()

}

// const arr1 = arrayClone(vegetables);

// const result = []

// for(let i = 0; i < vegetables.length;i++){
    
//     result[i] = vegetables[i]
// }

// console.log(result)

//              !Done
// 2. Преобразование массива в строку
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// console.log(vegetables.toString())
// console.log(vegetables.join(','))

// let result = '';

// for(let i = 0; i < vegetables.length; i++) {
    
//     result += vegetables[i] + (i === vegetables.length - 1 ? '' : ', ')
// }

// console.log(result)



//           !DONE
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.


// УБРАТЬ UNDEFINE
// for (let i = 0; i < arrNum.length; i++) {
//     console.log(arrNum[i + 1])
// }

//           !DONE
// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.



// for (let i = 0; i < arrNum.length - 1; i++) {

//     console.log(arrNum[i] + arrNum[i + 1])

// }


//Доработать нужно, последний элемент получается NaN



//             !Done
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.



// for (let i = 2; i < arrNum.length + 1; i++) {
//     console.log(arrNum[i - 2], arrNum[i - 1])
// }



//             !Done
// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.

// ?? запомнить что это такое!!! оператор нулевого слияния
// смотреть в чем разница в примере


// for (let i = 0; i < arrNum.length ; i++) {
//     console.log(arrNum[i] + (arrNum[i - 1] || 0) + (arrNum[i - 2] ?? 0))
// }

//             !Done
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.
// for (let i = 2; i < arrNum.length; i++) {
//     console.log(arrNum[i - 2] + arrNum[i - 1] + arrNum[i])
// }



//                 !!DONE
// Вывести элементы числового массива, которые больше, чем элементы, стоящие перед ними.


// for (let i = 1; i < arrNum.length; i++) {    
//     if (arrNum[i] > arrNum[i - 1]) {
//         console.log(arrNum[i])
//     }
// }



//             !DONE

// Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива на противоположные по знаку.
// const arrChange = [-3, 1, -2, 4, 6, -33]

// for (let i = 0; i < arrChange.length; i++) {
//     console.log(arrChange[i] = -arrChange[i])
// }



//                  !!DONE
// Найти номер и значение первого положительного элемента массива.

// const positiveArr = [ -1, -3, -3, -6, -7, 2, -7, -3,-1]

// Как вывести индекс в цикле ? Гугл молчит

// for( let i = 0; i < positiveArr.length; i++) {
//     if (positiveArr[i] > 0) { 
//         console.log(positiveArr[i], i)
//     }
// }

// positiveArr.forEach((item, index) => {
//     if (item > 0) {
//         console.log(item, index)
//     }
// })







//         !DONE
// Все элементы массива поделить на значение наибольшего элемента этого массива
// const arrNum3 = [22, 43, 123, 62, 84];

// const allNum = arrNum3.reduce((sum, current) => sum + current, 0);

// function sortNum(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// const maxNum = Math.max(...arrNum3)
// console.log(maxNum)


// for(let i = 0; i > arr.arrNum3; i++);

//  НАПИСАТЬ ФУНКЦИЮ НАХОЖДЕНИЕ САМОГО БОЛЬШОГО ЧИСЛО

// СОРТИРОВКА ЧЕРЕЗ АБСТРАКЦИЮ ЗАДАЧКИ ПРО КОЗУ И ВОЛКА
//
//
//
//

// const specialNum = arrNum3.slice().sort((a, b) => a - b)
// // const specialNum = arrNum3.sort((a, b) => a - b)
// const lastSpecialNum = specialNum[specialNum.length - 1]

// let divNum = allNum / lastSpecialNum
// console.log(divNum)





// for(let i = 0; i < arrNum3.length; i++) {

//     let max

//     max += arrNum3[i]

//     // console.log(arrNum3[i] > arrNum3[i + 1])
//     let result

//     if (arrNum3[i] > arrNum3[i + 1]) {
//         // console.log(result = arrNum3[i])
//         result > arrNum3[i + 1];
//     } 

//     // console.log(max)
// }




//          !DONE
// Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

// const xx = [2, 5, 3, 9];

// function culc(arr) {
//     return result = arr[0] * arr[1] + arr[2] * arr[3]
// }

// console.log(culc(xx))


// xx.forEach((item, index) => {
    
//     console.log(index)
//     if ( index === 0) {
//         ss.push(item * index == 2)
        
//     }

// })

// for (let i = 0; i < xx.length; i++) {
//     const element = xx[i];
//     if (item[0]) {
//         console.log(item * item[1])
//     }
// }







//              !DONE
// В одномерном массиве (заполнение массива случайными числами от -50 до 49) найти сумму отрицательных элементов

// const negArr = [25, -6, 8, 17, -8, -32, -44]


// const negNum = negArr.filter(item => item < 0);
// console.log(negArr.reduce((sum, current) => current < 0 ? sum + current : sum, 0))





// let olo = []

// function findNegg(arr) {
//     let lol = []

//     arr.forEach(item => {
//         if (item < 0) {
//             olo += item
//         } else {
//             lol += item
//         }
//     });

    

//     return olo

// }

// findNegg(negArr)

// const qwr = [-12, -3 , -4, -5]
// let result = qwr.reduce((sum, current) => sum + current, 0);

// console.log(result)




// const xx1 = negArr.reduce((sum, current) => {

//     // if(sum < 0) {
//     //     sum + current
//     // }

//     return sum
// })

// console.log(xx1)

// function findNegg(arr) {
//     let olo
//     arr.forEach(item => {
//         if (item > 0) {
//             olo += item
//         }
//     });

//     return olo
// }


// for (let i = 0; i < negArr.length; i++) {
//     const ele = negArr[i];
//     let neg = []
    
//     if (ele < 0) {
//         // neg += ele
//         neg.push(ele)
//     } else {
//         continue
//     }

//     neg
    

//     console.log(neg)  
// }



//          !doesn`t work

// В массиве найти минимальный и максимальный элементы, поменять их местами.
// for (let i = 0; i < arr.length; i++) {
//     let result

//     if (arr[i] >= arr[i - 1]) {
//     //    console.log( result = arr[i])
//     }
// }




// ЗАДАЧКИ НА ФУНКЦИИ



// Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).


let arr = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java", '123', '123'
];

function removeDuplicates(arr) {
    let uniqArr = [];

    for(let i = 0; i < arr.length; i++) {
        // console.log(includes(uniqArr, arr[i]), arr[i])
        if (!uniqArr.includes(arr[i])) {
           uniqArr.push(arr[i])
        }
    }

    return uniqArr
}

console.log(removeDuplicates(arr))

// function includes(array, item) {
//     const clonedArray = arrayClone(array)

    
    
//     for (let i = 0; i < clonedArray.length; i++) {
//         if (clonedArray[i] === item) {
//             return true;
//         }
        
//         return false;
//     }
// }


// for (let i = 1; i < arr.length; i++) {
//     // const ele = []
//     if (arr[i] === arr[i -1]) {
//         console.log(arr[i])
//     } else {
//         continue
//     }

// }

// arr.find((item) => {
//     if (item === item) {
//         console.log(item)
//     } 
// })

// const xx = arr.filter(item => item === item)
// console.log(xx)

// let jim = arr.reduce((item) => {
//     if (item === item) {
//         return item
//     }
// })
// console.log(jim)






// Отобразить элементы в случайном порядоке
// Используя метод sort перепишите предсталенный ниже код, который с помощью цикла for случайно изменяет порядок расстановки элементов массива.

// let array = [0,1,2,3,4,5,6,7,8,9];

// 8. Получить первые элементы массива
// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.
// var array = [1,2,3,4,5,6,7,8,9];

// function getFirst(array, n) {



//     // ваш код
// };



// console.log(getFirst(array)) // 1
// console.log(getFirst(array, 4)) // 1,2,3,4
// console.log(getFirst(array, -3)) // 1,2,3,4,5,6


// const xx = "*";

// for (let i = 0; i < 8; i++) {
//     const xx = "*";
//     let q

//     q = q + xx[i]
//     console.log(q)
// }