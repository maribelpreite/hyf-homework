// SAVE A NOTE
const notepad = [];
function saveNote(notes, content, id) {
    const draft = {};
    draft["content"] = content;
    draft.id = id;
    notes.push(draft);
    
}
saveNote(notepad, "Pick up groceries", 1);
saveNote(notepad, "Do laundry", 2);
console.log(notepad);


// GET A NOTE 
function getNote (notes, id) {
    for (let i = 0; i<notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
    return "ERROR!";
}

const firstNote = getNote(notepad, 1);
console.log(firstNote);

const thirdNote = getNote(notepad, 3);
console.log(thirdNote);


// LOG OUT A NOTE 
function logOutNotesFormatted(notes) {
    for (let i = 0; i<notes.length; i++) {
        const idString = notes[i].id;
        const contentString = notes[i].content;
        console.log(`The note with id: ${idString}, has the following note text: ${contentString}`)
    }
}

logOutNotesFormatted(notepad);


//UNIQUE FEATURE: DELETING A NOTE
function noteDelete (notes, idOrContent) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === idOrContent || notes[i]["content"].includes(idOrContent)) {
            notes.splice(i, 1);
            return notes;
        }
    }
    return "PLEASE PROVIDE A VALID NOTE ID OR CONTENT";
}

const deleteNote1 = noteDelete(notepad, 1);
console.log(deleteNote1);

const deleteNote2 = noteDelete(notepad, "laundry");
console.log(deleteNote2);

const deleteNote3 = noteDelete(notepad, 3);
console.log(deleteNote3);