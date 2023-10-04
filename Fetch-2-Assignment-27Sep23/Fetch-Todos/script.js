const todoList = document.getElementById("todo-list");

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {
        todos.forEach(todo => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed ? "Completed" : "Not Completed"}</td>
            `;
            todoList.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error fetching todos:", error);
    });
