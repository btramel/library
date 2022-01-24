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
        const modal = document.querySelector(button.dataset.modalTarget);
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
    document.getElementById('title').focus();
}

function closeModal(modal) {
    if (modal === null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function addBook () {

    // create card nodes
    const libraryContainer = document.getElementById('libraryContainer')
    let node = document.createElement('div');
    node.className = 'card';
        

    const title = document.getElementById('title').value
    let titleNode = document.createElement('h1');
    titleNode.innerHTML = `${title}`;
    titleNode.contentEditable = 'true';

    const author = document.getElementById('author').value
    let authorNode = document.createElement('p');
    authorNode.innerHTML = `${author}`;
    authorNode.contentEditable = 'true';

     
    const pages = document.getElementById('pages').value;
    let pageNode = document.createElement('p');
    pageNode.innerHTML = `${pages}`;
    pageNode.contentEditable = 'true';

    // create close button
    let closeButtonNode = document.createElement('button');
    closeButtonNode.classList.add('close-button-card'); 
    let spinnyDiv = document.createElement('div');
    spinnyDiv.innerHTML = `&times;`;
    spinnyDiv.classList.add('spinscale');
    closeButtonNode.appendChild(spinnyDiv);
    closeButtonNode.onclick = function removeCard() {
        libraryContainer.removeChild(node); }

    // changes depending on if read was checked or not
    let read;
    if ( document.getElementById('verifyread').checked ? read = 'read' : read = 'not read' );

    let readNode = document.createElement('p');
    readNode.innerHTML = `${read}`;
    readNode.contentEditable = 'true';

    // create new book obj
    const book = new Book(title, author, pages, read);
    
    // push new book to array and show it to me
    books.push(book);
    console.table(books);
    
    // create new card
    libraryContainer.append(node);

    // add content to card
    node.appendChild(titleNode);
    node.appendChild(authorNode);
    node.appendChild(pageNode);
    node.appendChild(readNode);
    node.appendChild(closeButtonNode);
    };

const form = document.querySelector('#form')
const submitBook = document.querySelector('#submit-book')

submitBook.addEventListener("click", (e) => {
    e.preventDefault();
    addBook();
    form.reset();
    modal.classList.remove('active');
  });