const myLibrary = []; 

function Book (title, author, pages, isRead) { //book object constructor
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.isRead = isRead; 
}

function addBooktoLibrary (book){ 
    myLibrary.push(book); 
}

function updateLibrary (){
    //clear the library 
    const cards = document.querySelectorAll(".card"); 
    cards.forEach((card)=>{
        card.remove();
    })
    //add books to library 
    myLibrary.forEach((book)=>{
        addBookToDOM(book);
    })
}

function addBookToDOM (book) {
    const container = document.querySelector(".content");
    const card = document.createElement("div")
    card.classList.add("card");

    //set text content for new elements inside 'card' div
    const title = document.createElement("p")
    title.classList.add("title");
    title.textContent = book.title; 

    const author = document.createElement("p")
    author.classList.add("author");
    author.textContent = book.author; 

    const pages = document.createElement("p")
    pages.classList.add("pages"); 
    pages.textContent = book.pages; 

    // append the title, author, and pages to the card div 
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages); 

    //add and append the two buttons to the button div in card div
    const buttonDiv = document.createElement("div");  
    buttonDiv.classList.add("button-div");
    const read = document.createElement("button"); 
    read.classList.add("read-button")
    if (book.isRead === false){
        read.classList.add("not-read");
    }
    else {
        read.classList.add("read"); 
    }
    read.addEventListener('click', ()=>{
        read.classList.toggle("read");
        read.classList.toggle("not-read");
    })
    buttonDiv.appendChild(read); 

    const remove = document.createElement("button")
    remove.classList.add("remove"); 
    remove.textContent = "remove"; 
    remove.addEventListener('click', ()=>{
        const index = myLibrary.findIndex((libraryBook) => libraryBook.title == book.title);
        myLibrary.splice(index, 1);
        updateLibrary(); 
    })
    buttonDiv.appendChild(remove); 

    card.appendChild(buttonDiv);

    //add the newly created card to the original container
    container.appendChild(card); 
}

//event listener for prompting the modal dialog and the exit button
const addBookButton = document.querySelector("#add-button");
const prompt = document.querySelector("dialog");
addBookButton.addEventListener('click', ()=>{
    prompt.showModal(); 
})
document.querySelector("#exit").addEventListener('click', ()=>{
    prompt.close();
})

//event listener for the submit button of the dialog and adding books 
document.querySelector("#book-input").addEventListener('submit', (event)=>{
    event.preventDefault();
    let title = document.querySelector("#title").value; 
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let isRead = document.querySelector('#read').checked; 
    
    const newBook = new Book(title, author, pages, isRead);
    addBooktoLibrary(newBook);
    updateLibrary();

    event.target.reset(); 
    prompt.close();
})


//initial creation of books 
const animalFarm = new Book("Animal Farm", "George Orwell", 200, false); 
const book2 = new Book("generic book", "Jesus", 300); 
addBooktoLibrary(animalFarm);
addBooktoLibrary(book2); 
myLibrary.forEach((book)=>{
    addBookToDOM(book);
})