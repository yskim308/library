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

const addBookButton = document.querySelector("#add-button");
const prompt = document.querySelector("dialog");
addBookButton.addEventListener('click', ()=>{
    prompt.showModal(); 
})

const animalFarm = new Book("Animal Farm", "George Orwell", 200); 
const book2 = new Book("generic book", "Jesus", 300); 
addBooktoLibrary(animalFarm);
addBooktoLibrary(book2); 


myLibrary.forEach((book)=>{
    const container = document.querySelector(".content");
    const card = document.createElement("div")
    card.classList.add("card");

    //set text content for new elements inside 'card'
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
    
    //add and append the two buttons to the card div 
    const read = document.createElement("button")
    read.classList.add("read"); 
    card.appendChild(read); 

    const remove = document.createElement("button")
    remove.classList.add("remove"); 
    card.appendChild(remove); 

    //now add the newly created card to the original container
    container.appendChild(card); 
})