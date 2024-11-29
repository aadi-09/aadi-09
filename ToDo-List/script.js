      // Get elements
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add event listener to button
addButton.addEventListener('click', () => {
    const task = inputField.value.trim();
    if (task !== '') {
        addTask(task);
        inputField.value = '';
    }
});

// Function to add task
function addTask(taskText) {
    // Create container for the task
    const taskContainer = document.createElement('div');
    taskContainer.className = 'list-item';

    // Create paragraph element for the task
    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Add delete functionality
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(taskContainer);
    });

    // Append paragraph and button to container
    taskContainer.appendChild(taskParagraph);
    taskContainer.appendChild(deleteButton);

    // Append task container to the list
    todoList.appendChild(taskContainer);
                           }
