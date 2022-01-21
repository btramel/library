let books = [];

// creates the object
class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  }

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

// clicking outside of the modal while open will close it
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal === null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal === null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList" 

function addBook () {
    // get form values
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('verifyread').checked

    // create card nodes
    const libraryContainer = document.getElementById('libraryContainer')
    let node = document.createElement('div');
    node.className = 'card';
    let textnode = document.createTextNode('new book!')

    // create new book obj
    const book = new Book(title, author, pages, read);
    
    // push new book to array and show it to me
    books.push(book);
    console.table(books);
    
    // create new card
    libraryContainer.append(node);

    // add content to card
    node.appendChild(textnode);

}

const form = document.querySelector('#form')
const submitBook = document.querySelector('#submit-book')

submitBook.addEventListener("click", (e) => {
    e.preventDefault();
    addBook();
    form.reset();
    modal.classList.remove('active');
  });