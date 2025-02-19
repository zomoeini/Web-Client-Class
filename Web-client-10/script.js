class Book {
    //isAvalable = flag (true/false)
    //isAvalable= true  by deafault is true 
    constructor(title,author,yearPublished, isAvalable= true) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.isAvalable = isAvalable;
    }

    display() {
        // I can combine html code with js variables 
        // I can add element tags in js file 
         return `<strong>Title:</strong> ${this.title} | 
         <strong>Author:</strong> ${this.author} |
         <strong>Year:</strong> ${this.yearPublished} |
         <strong>Avalable:</strong> ${this.isAvalable ? 'Yes' : 'No'}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        // show the detail of the new book in the web page . call the function to show or display books 
       //TO DO 
       displayBooks();
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
        //To DO show the new list of books withoiut the specific book
        displayBooks();
    }

    borrowBook(title) {
        // I should search and find the book 
        const book = this.books.find(book => book.title === title); // return yes or no (true/ false)
        if(book && book.isAvalable) {
            book.isAvalable = false;
            alert(`${title} has been borrowed`);
        }else {
            alert(`${title} is not available`);
        }

        //To Do change the list of Books
        displayBooks();
    }

    returnBook(title) {
        // check the book is in my list 
        const book =  this.book.find(book => book.title === title);
        if(book && !book.isAvalable) {
            book.isAvalable = true;
            alert(`${title} has been returned`);
        }else {
            alert(`${title} was not borrowed`);
        }

        // TO DO I should update the book list and let users know this book is avalable right now
        displayBooks();
    }

    // Implement a function to show or update the list of books
    displayBooks() {
        //Book list
        // dynamically generate the element in html 

        const booksContainer = document.getElementById("booksContainer");
        // clear() anything inside my container 
        booksContainer.innerHTML = "";

        this.books.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("col-md-4");
            // if I use the `` I can write my html code 
            bookCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                </div>
            </div>
            `;
        });

        booksContainer.appendChild(bookCard);
    }
}

// eventListener
const library = new Library();
//preload books
const book1 = new Book("Hello World", " Zoe Moeini",2014);
const book2 = new Book("Bye Bye World","John Doe",2025);
library.addBook(book1);
library.addBook(book2);