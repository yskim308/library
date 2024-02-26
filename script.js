const myLibrary = []; 

function Book (title, author, pages) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.printTitle = function () {
        console.log(this.title);
    }
}

function addBooktoLibrary (book){
    myLibrary.push(book); 
}

const animalFarm = new Book("Animal Farm", "George Orwell", 200); 
const book2 = new Book("generic book", "Jesus", 300); 
addBooktoLibrary(animalFarm);
addBooktoLibrary(book2); 
console.log(myLibrary);