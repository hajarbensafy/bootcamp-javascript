const allBooks = [
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      image: "https://example.com/hp.jpg",
      alreadyRead: true
    },
    {
      title: "Le Seigneur des Anneaux",
      author: "J.R.R. Tolkien",
      image: "https://example.com/lotr.jpg",
      alreadyRead: false
    }
  ];
  
  const section = document.querySelector('.listBooks');
  
  allBooks.forEach(book => {
    const div = document.createElement('div');
    const text = document.createElement('p');
    text.textContent = `${book.title} écrit par ${book.author}`;
    
    if (book.alreadyRead) {
      text.style.color = 'red';
    }
    
    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px';
    
    div.appendChild(text);
    div.appendChild(img);
    section.appendChild(div);
  });