let db;

// open 
const request = indexedDB.open("NoteDB",1);

// create object (table) if not exists
request.onupgradeneeded = (event) => {
    db = event.target.result;
    db.createObjectStore("notes", {autoIncrement : true});
};

request.onsuccess = (event) => {
    db = event.target.result;
    // displaynote on real time 
    displaynote();
};

function addNote() {
 
    // get data from input 
    const input = document.getElementById("noteInput");
    const note = input.value.trim();
    // if input is empty return back or refresh the page 
    if(!note) return;

    // I want to do my transaction 
    const trans = db.transaction("notes","readwrite");
    const store = trans.objectStore("notes");
    store.add(note);

    trans.oncomplete = () =>{
        // clear the input box ready for next note 
        input.value = "";
        displaynote();
    };

}

function displaynote() {
    const list = document.getElementById("noteList");
    list.innerHTML = "";

    // read data from database
    const trans = db.transaction("notes","readonly");
    const note = trans.objectStore("notes");
    // because it is more than one key 
    // we will read more than one value 
    const request = note.openCursor();

    request.onsuccess = (event) => {
        const cursor = event.target.result;
        if(cursor) {
            const li = document.createElement("li");
            li.textContent = cursor.value;
            list.appendChild(li);
            cursor.continue();
        }
    }

}