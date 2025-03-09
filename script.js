function addTodo(){
    let todoInput = document.getElementById("todoInput");
    let todoText = todoInput.value.trim();
    // console.log(todoText);

    if(todoText === ""){
        alert("ToDo can not be empty.");
        return;
    }

    let todoList = document.getElementById("todoList");
    let list = document.createElement("li");
    list.innerHTML = `<span>${todoText}</span> <button class="remove-btn" onClick="removeTodo(this)">Remove</button>`;
    todoList.appendChild(list);
    todoInput.value = "";
}

// when i pass this the remove-button gets passed in the function and we remove the parent of that button which is list.
function removeTodo(todoElement){
    todoElement.parentElement.remove();
}


document.getElementById("todoInput").addEventListener("keydown", (event) => { if(event.key === "Enter") {addTodo();}});