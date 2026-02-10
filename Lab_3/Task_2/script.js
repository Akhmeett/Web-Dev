const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


function addTask() {
    const text = taskInput.value;
    if (text === '') return;

 
    const li = document.createElement('li');
    li.className = 'task-item';

 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => {
        li.classList.toggle('done');
    };

  
    const span = document.createElement('span');
    span.textContent = text;


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = () => {
        taskList.removeChild(li); 
    };

    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);


    taskInput.value = '';
}


addButton.addEventListener('click', addTask);