import React, { useState } from 'react'
function BookStore() {
    const [book, setBook] = useState({
        isbn: "",
        title: "",
        author: "",
        price: "",
    });
    const [submittedBook, setSubmmitedBook] = useState(null);
    const [error, SetError] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!book.isbn || !book.title || !book.author || !book.price) {
            SetError("All fields are required!");
            return;
        }
        SetError("");
        setSubmmitedBook(book);
        setBook({
            isbn: "",
            title: "",
            author: "",
            price: ""
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>ISBN:</label>
                <input type="text" name="isbn" value={book.isbn} onChange={handleChange} /><br>
                </br>
                <label>Title:</label>
                <input type="text" name="title" value={book.title} onChange={handleChange} /><br></br>
                <label>Author</label>
                <input type="text" name="author" value={book.author} onChange={handleChange} /><br></br>
                <label>Place:</label>
                <input type="number" name="price" value={book.price} onChange={handleChange} /><br></br>
                <button type="submit">Submit</button>
                {error && <p>{error}</p>}
                {submittedBook && (
                    <div>
                        <p>{submittedBook.isbn}</p>
                        <p>{submittedBook.title}</p>
                        <p>{submittedBook.author}</p>
                        <p>{submittedBook.price}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default BookStore
