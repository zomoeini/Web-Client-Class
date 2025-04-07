// create database 
let db;

// when we want access to database make a request opeb db 
const request = indexedDB.open("MiniDb",1);

// run the request 
request.onupgradeneeded = (event) => {
    // open the database and if I have any result save it in my variable db 
    db = event.target.result;
    // create a table 
    db.createObjectStore("store");
};

request.onsuccess = (event) =>{
    db = event.target.result;
};


function save() {
    // get input value 
    const task = document.getElementById("taskInput").value;
    // send (transfer)  data to my database  and table - transaction 
    const trans = db.transaction("store","readwrite");
    trans.objectStore("store").put(task,"myKey");
}


function load() {
   const trans = db.transaction("store","readonly");
   const request = trans.objectStore("store").get("myKey");
 
   // if request is successfull and I have data from indexed Db 
   request.onsuccess =() =>{
    document.getElementById("result").textContent = "Task : " + request.result;
   }
}