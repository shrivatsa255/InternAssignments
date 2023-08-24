
function Book(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
}

const library = [];

function addBook(title, author) {
    const newBook = new Book(title, author);
    library.push(newBook);
}

function borrowBook(title) {
    const book = library.find(book => book.title === title)
    if (book) {
        book.isAvailable = false;
        console.log(`${title} is borrowed\n`);
    }
    else {
        console.log(`${title} is not available\n`);
    }
}

function returnBook(title) {
    const book = library.find(book => book.title === title)
    if (book) {
        book.isAvailable = true;
        console.log(`${title} is returned\n`)
    }
    else {
        console.log(`${title} is not available\n`);
    }
}

function listBooks() {
    for (const book of library) {
        const available = book.isAvailable ? 'Available' : 'Borrowed';
        console.log(`Title:${book.title}\nAuthor:${book.author}\nAvailability:${available}\n`)
    }
}

addBook("The Hobbit", "J.R.R. Tolkien");
addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
borrowBook("The Hobbit");
listBooks();
returnBook("The Hobbit");
listBooks();
