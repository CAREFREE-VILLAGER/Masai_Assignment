
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
 
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
  
  
  Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  };
  
  
  const author1 = new Author("J.K. Rowling", 1965, "British");
  const author2 = new Author("George Orwell", 1903, "British");
  
  
  const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 20.99);
  const book2 = new Book("1984", author2, "Dystopian", 15.49);
  
  
  console.log("Book 1:");
  book1.getBookInfo();
  console.log("\nBook 2:");
  book2.getBookInfo();
  