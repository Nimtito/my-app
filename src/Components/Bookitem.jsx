import react, { useState } from 'react';

function Booklist() {
  const [books, setBooks] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Deep Work", author: "Cal Newport" }
  ]);

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div>
      <h2>My Booklist</h2>
      {books.map(book => (
        <BookItem key={book.id} book={book} onDelete={deleteBook} />
      ))}
    </div>
  );
}

export default BookList;