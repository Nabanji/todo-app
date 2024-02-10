// Selectors
const submitBtn = document.querySelector(".submit-btn");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");

const noTodos = document.createElement("h2");

const todoArr = [];

submitBtn.addEventListener("click", (e) => {

    // prevents the page from refreshing once a task has been submitted
    e.preventDefault();

    if (todoInput.value === "") {
        noTodos.classList.add("empty-todos");
        noTodos.textContent = "No Todos Available";
        todoList.appendChild(noTodos);
    }

    else {
        // removing the no todos header when a todo is added by the user
        noTodos.style.display = "none";

        // adding the li for the todo added
        const newTodo = document.createElement("li");
        newTodo.textContent = todoInput.value;
        newTodo.classList.add("todo-item");
        console.log(newTodo.id);
        todoList.appendChild(newTodo);

        // adding the new todo to the todo array for storage
        todoArr.push(newTodo.textContent);

        // refreshing the input after the task has been submitted
        todoInput.value = "";

        // creating a div to have the operations of the todo i.e deleting and confirming a task has been done
        const taskOperations = document.createElement("div");

        // Adding an input checked property for a todo to show the user whether it has been done or not
        const checkedBtn = document.createElement("input");
        checkedBtn.classList.add("completed");
        checkedBtn.type = "checkbox";

        // Adding the delete button for the todo once it is completed it can be deleted
        const deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-solid");
        deleteBtn.classList.add("fa-trash");

        deleteBtn.classList.add("deleted");

        // appending the operations div to the ul containing the todos
        taskOperations.appendChild(checkedBtn);
        taskOperations.appendChild(deleteBtn);

        // appending the operations div to the ul
        newTodo.appendChild(taskOperations);

        // deleting a todo for the ones entered by the user
        deleteBtn.addEventListener("click", () => {
            newTodo.style.display = "none";
        })

        // marking the checkbox of a todo to show it has been completed
        checkedBtn.addEventListener("click", () => {
            if (checkedBtn.checked === true) {
                newTodo.style.textDecoration = "line-through";
                newTodo.style.color = "green";
            }
            else {
                newTodo.style.textDecoration = "none";
            }
        })
    }
})

















