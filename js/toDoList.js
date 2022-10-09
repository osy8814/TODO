const todoForm = document.querySelector(`.todolist__main`);
const toDolist = document.querySelector(`.todolist__main-list`);
const toDoInput = document.querySelector(`.todolist__main-input`);

function addTodo(event) {
    event.preventDefault();

    const todoli = document.createElement(`li`);
    const chk = document.createElement(`i`);
    const del = document.createElement(`i`);

    chk.classList.add("fas");
    chk.classList.add("fa-check-square");
    del.classList.add("fas");
    del.classList.add("fa-trash-alt");

    todoli.innerHTML = toDoInput.value
    todoli.appendChild(chk);
    todoli.appendChild(del);


    toDolist.appendChild(todoli);
    toDoInput.value = "";

}



todoForm.addEventListener("submit", addTodo);