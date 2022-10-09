const Note = document.querySelector(`.note__memo`);
const SaveBtn = document.querySelector(`.saveNote`);
const ClearBtn = document.querySelector(`.clearNote`);
const KEY_NOTECONTENT = "noteContent";

function saveNote() {
    localStorage.setItem(KEY_NOTECONTENT, Note.value);
    alert("Saved");
}

function clearNote() {
    if (confirm("Are you sure you want to delete?") === true) {
        Note.value = "";
    }
}
SaveBtn.addEventListener("click", saveNote);
ClearBtn.addEventListener("click", clearNote);

const SavedNoteContent = localStorage.getItem(KEY_NOTECONTENT);
if (SavedNoteContent !== null) {
    Note.value = SavedNoteContent;
}