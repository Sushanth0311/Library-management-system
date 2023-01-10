import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/bookslist.css';

const Booklist = () => {
    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setBooks(data);
        }
        fetchData()
    }, [books])
    let handleDelete = (id, title) => {
        fetch(`http://localhost:4000/books/${id}`,{
            method:"DELETE"
        })
        alert(`${title} will be deleted permanently`)
    }

    let Navigate=useNavigate()
    let Read =(id)=>{
        Navigate(`/admin/book-list/${id}`)
    }

    return (
        <div className="books">
            <h1>Book List: {books.length}</h1>
            <div className="books_section">

                {books.map(data => (
                    <div className="book_card">
                        <div className="image">
                            <img height={300} width={230} src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="headimg">
                            <h1>Title:{data.title}</h1>
                            <h4>Authors:{data.authors.toString()}</h4>
                            <h4>Page:{data.pageCount}</h4>
                            <h4>Category:{data.categories.toString()}</h4>
                            <button className="btnn" onClick={ ()=> Read(data.id)}>Read more</button>
                            <button onClick={() => handleDelete(data.id, data.title)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Booklist;