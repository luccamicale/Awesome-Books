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

  storeTag() {
    const bookStore = `<div class = "book">
    <div class="dates">
    <h2 class="title"> ${this.title}</h2> 
    <p class="by">by</p>
    <h2 class ="author"> ${this.author}</h2> </div>
    <button class="remove" type="button">Remove</button>
    </div>`;

    Book.completeData.push(bookStore);
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
    const bookStore = `<div class="book ${Book.completeData.length % 2 === 0 ? 'even' : 'odd'}">
      <div class="dates">
        <h2> ${this.title}</h2>
        <p class="by">by</p>
        <h2> ${this.author}</h2>
      </div>
      <button class="remove" type="button">Remove</button>
    </div>`;
    bookList.innerHTML += bookStore;
    this.bookAutor();
    return bookList.innerHTML;
  }

  /* remove book from list html */
  static removeEvent(parameter) {
    const nodata = document.querySelector('.nodata');
    if (bookList.childElementCount === 1) {
      nodata.style.display = 'block';
    }
    if (parameter.target.classList.contains('remove')) {
      document.querySelector('.booklist').removeChild(parameter.target.parentElement);
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
    newBook.storeTag();
    title.value = '';
    author.value = '';
  }
});

/** display books */
let aumento = 0;
document.querySelector('.nav_list_link').addEventListener('click', () => {
  document.getElementById('contact').style.display = 'none';
  document.getElementById('list-book').style.display = 'block';
  document.getElementById('add-book').style.display = 'none';
  aumento += 1;
  const nodata = document.querySelector('.nodata');

  if (aumento === 1) {
    if (Book.completeData.length > 0) {
      nodata.style.display = 'none';
    } else {
      nodata.style.display = 'block';
    }

    Book.completeData.forEach((actual, position, datosB) => {
      bookList.innerHTML += datosB[position];
    });
  }
});

/* remove  book */
bookList.addEventListener('click', (x) => {
  Book.removeEvent(x);
});

// show and remove the section

document.querySelector('.nav_list_addnew').addEventListener('click', () => {
  const datosP = [];
  for (let i = 0; i < bookList.childElementCount; i += 1) {
    datosP.push(bookList[i]);
  }

  Book.completeData = [];
  if (!Book.completeData.length <= 0) {
    Book.completeData.push(datosP);
  }

  aumento = 0;
});

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

document.querySelector('.nav_list_contact').addEventListener('click', showContact);
document.querySelector('.nav_list_addnew').addEventListener('click', showAddBook);
