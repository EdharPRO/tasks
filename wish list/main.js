const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-input');
const button = document.querySelector('#button');
const tasks = [
    {
        id: 1,
        name: 'Ivan',
    },
    {
        id: 2,
        name: 'Jimmy',
    }
];

todoList.innerHTML = tasks.map(getTaskHtml).join('');

// tasks.forEach(function(task) {
//     getTaskHtml(task)
// })

button.addEventListener('click', () => {
    todoList.insertAdjacentHTML('beforeend', getTaskHtml({
        id: Date.now(),
        name: todoInput.value
    }));    

    todoInput.value = '';    
})

// ? = optional chaning
todoList.addEventListener('click', ({ target }) => {
    const deleteBtnEl = target.closest('[data-delete-task]');
    const taskEl = deleteBtnEl?.closest('[data-task]');

    if (!taskEl) { 
        return;
    }
    
    taskEl.remove()    
})

function getTaskHtml(task) {
    // const newLi = document.createElement('li');
    // const deleteBtn = document.createElement('button');

    // newLi.innerHTML = task.name;
    // todoList.append(newLi);
    // newLi.setAttribute('data-task', task.id);


    // deleteBtn.classList.add('margin-left', 'red-text'); // Добавить один класс 'Delete btn'
    // deleteBtn.innerText = 'Удалить';
    // newLi.append(deleteBtn);

    // deleteBtn.setAttribute('data-delete-task', '');

    

    return `
        <li class="task" data-task="${task.id}">
            ${task.name}
            
            <button class="task__button" data-delete-task>
                Удалить
            </button>
        </li>
    `;
}






// Методы JS
const numbersArr = [5, 1, 2, 3, 4, 5];
const chaosArr = ['a', true, 3, 5, 5, 6, 7, '>'];


forEach
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}

// return ыходит только из функции
// findIndex
function findIndex (arr, item) {    
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i;
        }
    }

    return -1;
}

// console.log(findIndex(numbersArr, 3312)) // 1 (index)


const asdqq = [1, 2, 3, 'dsf', '<', true]
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


  
//   1. Создать массив на основе данного, где значениями будут объекты вида { x: 0, y: 0, value: 1 }, { x: 0, y: 1, value: 2 }
//   2. Сложить все вложенные значения в один массив (let q = array.flat())
//   3. Найти сумму чисел в первом ряду ( let r = array[0].reduce((x, y) => x + y, 0) )
//   4. Найти все чётные числа по диагонали слева на право

// книга. прочитать массивы и перечитывать пока не дойдёт
// переписать трекер на новый код из списка желаний




// const numbers = [1, 2, 3, 4, 5];


// let newNum = [];
// let oldNum = []
// numbers.forEach((item) => {
//     if (item % 2 === 0) {
//         newNum.push(item * 2)
//     } else {
//         oldNum.push(item)
//     }
// })

// console.log(newNum)
// console.log(oldNum)

let newNum = [];
let oldNum = []

const numbers = [1, [2, 3, 4], 3, 4, 5];

numbers[1].forEach((item) => {
    if (item % 2 === 0) {
        newNum.push(item * 2)
    } else {
        oldNum.push(item)
    }
});

for ( let i = 0; 0 < arr.length; i++) {
    arr[0]
}

console.log(newNum)
console.log(oldNum)


















