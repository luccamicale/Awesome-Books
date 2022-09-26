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
  
addbook("juan", "sa");
addbook("lucia", "cs");
addbook("jose", "carla");
addbook("jose", "carla");
addbook("jose", "carla");



let narray = bookNum.filter((data,position,) => {

  if(data.title != "juan"  && data.autor != "sa"){
  return this
  }
  
  
  
  })
  console.log(narray)

  addbnt.addEventListener('click' , ()=>{

addbook(title.textContent,author.textContent)

    const li = document.createElement('li');
const button = document.createElement('button');
li.className = 'item_1';
li.innerHTML = "asdas";


button.className = 'button_remove';
button.innerHTML = 'remove';
 
li.appendChild(button);


bookList.appendChild(li)



  })
  
  
  
  