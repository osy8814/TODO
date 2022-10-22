const Note = document.querySelector(`.note__memo`);
const SaveBtn = document.querySelector(`.saveNote`);
const ClearBtn = document.querySelector(`.clearNote`);
const SizeUpBtn = document.querySelector('.fa-plus-square');
const SizeDownBtn = document.querySelector('.fa-minus-square');
const SizeinitBtn = document.querySelector('.fa-sync-alt');
let DefaultFontSize = 3;

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


const SizeController = {
    SizeUp: function () {
        DefaultFontSize = DefaultFontSize + 0.5;
        Note.style.fontSize = `${DefaultFontSize}vmin`;
    },
    SizeDown: function () {
        DefaultFontSize = DefaultFontSize - 0.5;
        if (DefaultFontSize < 1) {
            DefaultFontSize = 1;
        }
        Note.style.fontSize = `${DefaultFontSize}vmin`;
    },
    SizeInit: function () {
        DefaultFontSize = 3;
        Note.style.fontSize = `${DefaultFontSize}vmin`;
    }

}
SizeUpBtn.addEventListener("click", SizeController.SizeUp);
SizeDownBtn.addEventListener("click", SizeController.SizeDown);
SizeinitBtn.addEventListener("click", SizeController.SizeInit);

const SavedNoteContent = localStorage.getItem(KEY_NOTECONTENT);
if (SavedNoteContent !== null) {
    Note.value = SavedNoteContent;
}