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
    newLi.append(deleteBtn);


    deleteBtn.addEventListener('click', () => {
        newLi.remove();
        deleteBtn.remove();
    });

});



