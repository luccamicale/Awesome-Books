const title = document.getElementById('title');
const author = document.getElementById('author');
const addbnt = document.getElementById('add-btn');
const bookList = document.getElementById('Books-List');


let book = {
    title: this.title,
    autor: this.autor,
    setD: function(title,autor)  {
    this.title = title;
    this.autor = autor;
  },
    
  };
  
  const bookNum = [];
  
  let addbook = (title, autor)=>{
  
    let books = Object.create(book);  
  
    books.setD(title,autor)
    
    bookNum.push(books)
  }
  
  
  addbook("juan ", "sa");
  
  console.log(bookNum);
  
  
  
  