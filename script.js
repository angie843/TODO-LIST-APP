window.onload = initializeApp;

function initializeApp() {
    const addTaskBtn = document.querySelector('#add-btn');
    const taskInput = document.querySelector('#task-input');
    const taskDate = document.querySelector('#task-date');
    const taskList = document.querySelector('#task-list');

    addTaskBtn.addEventListener('click', () => handleAddTask(taskInput, taskDate, taskList));
}

function handleAddTask(taskInput, taskDate, taskList) {
    const taskName = taskInput.value.trim();
    const taskDateValue = taskDate.value; 

    if (taskName === '') {
        alert('Enter a task name.');
        return;
    }
    if (taskDateValue === '') {
        alert('Select a date.');
        return;
    }

    const newTaskElement = createTaskElement(taskName, taskDateValue);
    taskList.appendChild(newTaskElement);
    taskInput.value = '';
    taskDate.value = ''; 
}

function createTaskElement(taskName, taskDate) {
    const li = document.createElement('li'); 
    const taskDiv = document.createElement('div'); 
    taskDiv.className = 'task-item';

    const dateSpan = document.createElement('span');
    dateSpan.className = 'task-date';
    dateSpan.textContent = taskDate; 

    const taskTitle = document.createElement('span');
    taskTitle.className = 'task-title';
    taskTitle.textContent = taskName; 

    const taskOptions = document.createElement('div');
    taskOptions.className = 'task-options';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-option';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
        editTask(taskTitle, dateSpan);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-option';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        deleteTask(li);
    });

    taskDiv.appendChild(dateSpan);
    taskDiv.appendChild(taskTitle);
    taskOptions.appendChild(editBtn);
    taskOptions.appendChild(deleteBtn);

    taskDiv.appendChild(taskOptions);
    li.appendChild(taskDiv);
    return li;
}

function editTask(taskTitle, taskDate) {
    let newTaskName; 
    do {
        newTaskName = prompt('Edit Task Name:', taskTitle.textContent);
        if (newTaskName === null) {
            return; 
        }
        if (newTaskName.trim() === '') {
            alert('Task name cannot be empty. Please enter a valid task name.');
        }
    } while (newTaskName === null || newTaskName.trim() === ''); 
    taskTitle.textContent = newTaskName; 

    let newTaskDate; 
    do {
        newTaskDate = prompt('Edit Date:', taskDate.textContent);
        if (newTaskDate === null) {
            return; 
        }
        if (newTaskDate.trim() === '') {
            alert('Date cannot be empty. Please enter a valid date.');
        }
    } while (newTaskDate === null || newTaskDate.trim() === ''); 
    taskDate.textContent = newTaskDate; 
}

function deleteTask(listItem) {
    const confirmation = confirm('Are you sure you want to delete this task?');
    if (confirmation) {
        listItem.remove();
    }
}
