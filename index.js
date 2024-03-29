const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to create a new todo item
function createTodoItem(todoText) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <input type="checkbox">
        <span>${todoText}</span>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);
}

// Event listener for adding todo item
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
        createTodoItem(this.value.trim());
        this.value = '';
    }
});

// Event delegation for handling delete todo item
todoList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});