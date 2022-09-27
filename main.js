const addBook = document.querySelector('#btn-add');
const bookList = document.querySelector('#book-list');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.querySelector('#form');


 class Book {
  static complete_data =[]; // variable to save on  local store

  constructor(title,author){
   this.title = title;
  this.author = author;
}


/* set data on local storage */
 book_autor(){
  this.data =  new Object; 
  this.data.title = this.title;
  this.data.author = this.author
  Book.complete_data.push(this.title,this.author)  
  localStorage.setItem("Books-list", JSON.stringify(Book.complete_data));
}

 
/* function add book on html */
 addBooks() {
  const bookStore = `<div class = "book">
  <h2> ${this.title}</h2> 
  <p class="by">by</p>
  <h2> ${this.author}</h2>
  <button class="remove" type="button">Remove</button>
  <hr>
  </div>`;
  bookList.innerHTML += bookStore;
  this.book_autor();
  return bookList.innerHTML;


}

/*remove book from list html */
removeEvent(parameter){
  
  if (parameter.target.classList.contains('remove')) {
    document.querySelector('.book-list').removeChild(parameter.target.parentElement);
    const parent = parameter.target.parentElement;
    
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
const newBook = new Book(title.value , author.value);
newBook.addBooks();
title.value = '';
    author.value = '';
  }
});



// remove
const newBook = new Book(title.value , author.value);
bookList.addEventListener('click', (x)=>{
  newBook.removeEvent(x)
});