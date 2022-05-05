const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-input');
const button = document.querySelector('#button');

const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];

todoList.innerHTML = getTasks().map(getTaskHtml).join('');

button.addEventListener('click', () => {
    const task = {
        id: Date.now(),
        name: todoInput.value
    };

    localStorage.setItem('tasks', JSON.stringify(getTasks().concat(task)));
    todoList.insertAdjacentHTML('beforeend', getTaskHtml(task));    

    todoInput.value = '';
});

todoList.addEventListener('click', ({ target }) => {
    // кнопка элемента удаления
    const deleteBtnEl = target.closest('[data-delete-task]');
    // ссылка на дом элемент
    const taskEl = deleteBtnEl?.closest('[data-task]');

    if (!taskEl) { 
        return;
    }

    const taskID = +taskEl.dataset.task;
    const filtredTasks = getTasks().filter(({ id }) => id !== taskID);

    localStorage.setItem('tasks', JSON.stringify(filtredTasks));
    
    taskEl.remove();
});

function getTaskHtml(task) {
    return `
        <li class="task" data-task="${task.id}">
            ${task.name}
            
            <button class="task__button" data-delete-task>
                Удалить
            </button>
        </li>
    `;
};