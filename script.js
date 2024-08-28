document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Load stored tasks
    loadTasks();

    // Add a new task
    addBtn.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    // Handle task click events
    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
            saveTasks();
        } else if (e.target.classList.contains('close-btn')) {
            e.target.parentElement.remove();
            saveTasks();
        }
    });

    // Add task function
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.classList.add('close-btn');
        li.appendChild(closeBtn);

        todoList.appendChild(li);
        saveTasks();
    }

    // Save tasks to local storage
    function saveTasks() {
        const tasks = [];
        todoList.querySelectorAll('li').forEach((li) => {
            tasks.push({ text: li.textContent.slice(0, -1), completed: li.classList.contains('completed') });
        });
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }

    // Load tasks from local storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.textContent = task.text;

            const closeBtn = document.createElement('button');
            closeBtn.textContent = '×';
            closeBtn.classList.add('close-btn');
            li.appendChild(closeBtn);

            if (task.completed) {
                li.classList.add('completed');
            }

            todoList.appendChild(li);
        });
    }
});
