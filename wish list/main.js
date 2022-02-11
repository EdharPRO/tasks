const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-input');
const button = document.querySelector('#button');


button.addEventListener('click', () => {
    
    const newLi = document.createElement('li');
    newLi.innerText = todoInput.value;
    todoList.append(newLi);

    todoInput.value = '';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('margin-left', 'red-text');
    deleteBtn.innerText = 'Удалить';
    todoList.append(deleteBtn);

    todoList.addEventListener('click', (event) => {
        let target = event.target;

        if (target == deleteBtn) {
            newLi.remove();
            deleteBtn.remove();           
        }
    })
    
});

todoList.addEventListener('click', (event) => {
    let deleteBtn = document.querySelector('button')
    if (event.target == deleteBtn) return
    alert(event.target.innerHTML)
});

// Методы JS
const numbersArr = [1, 2, 3, 4, 5];
const chaosArr = ['a', true, 3, 5, 5, 6, 7, '>'];


// forEach
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}


// findIndex
function findIndex (arr, elem) {
    let result = []

    forEach(arr, (item, index) => {
        if (item == elem) {
            result += index
        }
    })

    return result
}

console.log(findIndex(numbersArr, 2)) // 1 (index)



// FIND
function find (arr, num) {
    num
    let result = []

    forEach(arr, (item) => {
        if (item == num) {
            result += item
        }
    })

    if (result === []) {
        result = 'hello'
    }

    return result
}

console.log(find(numbersArr, 2)) //