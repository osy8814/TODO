const todoForm = document.querySelector(`.todolist__main`);
const toDolist = document.querySelector(`.todolist__main-list`);
const toDoInput = document.querySelector(`.todolist__main-input`);

const KEY_TODO = "todos";
const KET_CHKDTODO = "chkdtodos";

let toDos = [];
let chkdtoDos = [];

function saveToLocal() {
    localStorage.setItem(KEY_TODO, JSON.stringify(toDos));
}

function saveChkdToLocal() {
    localStorage.setItem(KET_CHKDTODO, JSON.stringify(chkdtoDos));
}

function addTodo(event) {
    event.preventDefault();

    const newTodoValue = toDoInput.value;

    const newTodoObj = {
        Text: newTodoValue,
        id: `K${Date.now()}`
    };
    toDos.push(newTodoObj);
    saveToLocal();
    viewTodoList(newTodoObj);



}
function chkList(event) {
    const selectedLi = event.target.parentElement;
    const spanInLi = selectedLi.querySelector(`span`);

    spanInLi.style.textDecoration = "line-through";
    chkdtoDos.push(selectedLi.id);
    saveToLocal();
    saveChkdToLocal();
}

// chkList override
function ReChkList(objId) {
    const selectedLi = document.querySelector(`#${objId}`);
    const spanInLi = selectedLi.querySelector(`span`);

    spanInLi.style.textDecoration = "line-through";
}


function delList(event) {
    const selectedLi = event.target.parentElement;
    toDos = toDos.filter(todo => todo.id !== selectedLi.id);
    chkdtoDos = chkdtoDos.filter(chkdtodoid => chkdtodoid !== selectedLi.id);
    selectedLi.remove();
    saveToLocal();
    saveChkdToLocal();
}

function viewTodoList(obj) {
    const todoli = document.createElement(`li`);
    const todoSpan = document.createElement(`span`);
    todoli.id = obj.id;
    todoSpan.innerHTML = obj.Text;

    todoli.appendChild(todoSpan);

    const chk = document.createElement(`i`);
    chk.classList.add("fas");
    chk.classList.add("fa-check-square");
    chk.style.cursor = "pointer";
    chk.id = "chk";
    todoli.appendChild(chk);
    chk.addEventListener("click", chkList);

    const del = document.createElement(`i`);
    del.classList.add("fas");
    del.classList.add("fa-trash-alt");
    del.style.cursor = "pointer";
    del.id = "del";
    todoli.appendChild(del);
    del.addEventListener("click", delList);

    toDolist.appendChild(todoli);
    toDoInput.value = "";

}

todoForm.addEventListener("submit", addTodo);


const loadToDos = localStorage.getItem(KEY_TODO);
const loadchkdToDos = localStorage.getItem(KET_CHKDTODO);

if (loadToDos !== null) {
    const parsedToDos = JSON.parse(loadToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(viewTodoList);
}
if (loadchkdToDos !== null) {
    const parsedChkdToDos = JSON.parse(loadchkdToDos);
    chkdtoDos = parsedChkdToDos;
    chkdtoDos.forEach(ReChkList);
}