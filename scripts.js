
// get html items
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const newBookButton = document.getElementsByClassName('new-book');

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

// books to start
const gatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 193, false);
const dune = new Book('Dune', 'Frank Herbert', 412, false);
const lotr = new Book('The Lord of the Rings: The Fellowship of the Ring', 'J.R.R. Tolkien', 323, false);
const medicineWomen = new Book('Medicine Women', 'Louise Erdrich', 270, false);

let myLibrary = [gatsby, dune, lotr, medicineWomen];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.printInfo = function() {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
}

function addBookToLibrary() {
    //create modal in middle of screen
        //modal features input for title, author, pages, and read or not
        //another button called add book
            // onclick, add new object to the myLibrary array feat prompt info
            // onclick create new card inside container populated with promp info
        //another button called cancel
            // onclick, close modal and return
}

// newBookButton.addEventListener('click', addBookToLibrary() {

// }