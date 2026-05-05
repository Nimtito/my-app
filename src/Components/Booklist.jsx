import react,{ useState } from 'react';


function Booklist() {
  const [books, setBooks] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Deep Work", author: "Cal Newport" },
    { id: 3, title: "The Alchemist", author: "Paulo Coelho" }
  ]);

  
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");


  const addBook = () => {
    if (newTitle.trim() === "" || newAuthor.trim() === "") return;

    const newBook = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor
    };

    setBooks([...books, newBook]);

  
    setNewTitle("");
    setNewAuthor("");
  };

  
  const deleteBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h2>My Booklist</h2>

      
      <div>
        <input
          type="text"
          placeholder="Enter book title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />

        <button onClick={addBook}>Add Book</button>
      </div>


      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onDelete={deleteBook}
          />
        ))
      )}
    </div>
  );
}

export default Booklist;