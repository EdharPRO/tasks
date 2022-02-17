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

button.addEventListener('click', () => {
    todoList.insertAdjacentHTML('beforeend', getTaskHtml({
        id: Date.now(),
        name: todoInput.value
    }));    

    todoInput.value = '';    
})


todoList.addEventListener('click', ({ target }) => {
    const deleteBtnEl = target.closest('[data-delete-task]');
    const taskEl = deleteBtnEl?.closest('[data-task]');

    if (!taskEl) { 
        return;
    }
    
    taskEl.remove()    
})

function getTaskHtml(task) {
    return `
        <li class="task" data-task="${task.id}">
            ${task.name}
            
            <button class="task__button" data-delete-task>
                Удалить
            </button>
        </li>
    `;
}