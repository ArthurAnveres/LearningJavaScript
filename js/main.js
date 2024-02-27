// Elements Selection
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Functions
const saveTodo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("he")
    todoTitle.innerText = text
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("Button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"><i/>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("Button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"><i/>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("Button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"><i/>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)
}

// Events
todoForm.addEventListener("submit", (e) => {

    e.preventDefault()

    const inputValue = todoInput.value

    if(inputValue) {
        saveTodo(inputValue)

    }
})