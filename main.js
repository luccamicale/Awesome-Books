const addBook = document.querySelector('#btn-add');
const bookList = document.querySelector('#book-list');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.querySelector('#form');

class Book {
  static completeData =[]; // variable to save on  local store

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  /* set data on local storage */
  bookAutor() {
    this.data = {};
    this.data.title = this.title;
    this.data.author = this.author;
    Book.completeData.push(this.title, this.author);
    localStorage.setItem('Books-list', JSON.stringify(Book.completeData));
  }

  /* function add book on html */
  addBooks() {
    const bookStore = `<div class = "book">
  <div class="dates">
  <h2> ${this.title}</h2> 
  <p class="by">by</p>
  <h2> ${this.author}</h2> </div>
  <button class="remove" type="button">Remove</button>
  </div>`;
    bookList.innerHTML += bookStore;
    this.bookAutor();
    return bookList.innerHTML;
  }

  /* remove book from list html */
  static removeEvent(parameter) {
    if (parameter.target.classList.contains('remove')) {
      document.querySelector('.book-list').removeChild(parameter.target.parentElement);
    }
  }
}

// local storage. every time you press any key.
let localForm = { title: '', author: '' };
if (localStorage.localForm) {
  localForm = JSON.parse(localStorage.localForm);
  title.value = localForm.title;
  author.value = localForm.author;
}
form.addEventListener('input', () => {
  localStorage.localForm = JSON.stringify(localForm);
  localForm.title = title.value;
  localForm.author = author.value;
});

// add book
addBook.addEventListener('click', (e) => {
  if (title.value === '' || author.value === '') {
    e.preventDefault();
  } else {
    const newBook = new Book(title.value, author.value);
    newBook.addBooks();
    title.value = '';
    author.value = '';
  }
});

// remove

bookList.addEventListener('click', (x) => {
  Book.removeEvent(x);
});

// show and remove the section

function showAddBook() {
  document.getElementById('add-book').style.display = 'flex';
  document.getElementById('list-book').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}
  
function showContact() {
  document.getElementById('contact').style.display = 'flex';
  document.getElementById('list-book').style.display = 'none';
  document.getElementById('add-book').style.display = 'none';
}
  