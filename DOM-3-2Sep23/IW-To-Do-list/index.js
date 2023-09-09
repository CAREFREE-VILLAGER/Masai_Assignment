document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const taskList = document.getElementById('task-list');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();

        
        const taskName = document.getElementById('task').value;
        const priority = document.getElementById('priority').value;

        
        const row = document.createElement('tr');
        
        
        const taskCell = document.createElement('td');
        taskCell.textContent = taskName;

        
        const priorityCell = document.createElement('td');
        priorityCell.textContent = priority;
        priorityCell.className = priority.toLowerCase() + '-priority';

        
        const favoriteCell = document.createElement('td');
        const favoriteButton = document.createElement('button');
        favoriteButton.textContent = 'Favourite';
        favoriteCell.appendChild(favoriteButton);

        
        row.appendChild(taskCell);
        row.appendChild(priorityCell);
        row.appendChild(favoriteCell);

        
        taskList.appendChild(row);

        
        todoForm.reset();
    });
});
