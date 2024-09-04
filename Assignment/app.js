document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const timerInput = document.getElementById('timerInput');
    const taskText = taskInput.value.trim();
    const timerDuration = parseInt(timerInput.value.trim());

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    if (isNaN(timerDuration) || timerDuration <= 0) {
        alert('Please enter a valid timer duration.');
        return;
    }
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = `${taskText} - Time left: ${timerDuration}s`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = '';

    let timeLeft = timerDuration;
    const timerInterval = setInterval(function() {
        timeLeft--;
        newTask.textContent = `${taskText} - Time left: ${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            newTask.classList.add('completed');
            newTask.textContent = `${taskText} - Completed`;
        }
    }, 1000);

    newTask.addEventListener('click', function() {
        newTask.classList.toggle('completed');
        clearInterval(timerInterval);
    });

    deleteButton.addEventListener('click', function() {
        clearInterval(timerInterval);
        taskList.removeChild(newTask);
    });
});


