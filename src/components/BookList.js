//firebase imports
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

function BookList({ books }) {
  const handleClick = async (id) => {
    const docRef = doc(db, "books", id);
    deleteDoc(docRef);
  };
  console.log(books);
  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BookList;
