import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    //title,categories,
    let [title,seTitle]=useState("")
    let [categories,setCategory]=useState("")
    let [authors, setAuthor]=useState("")
    let [pageCount,setPage]=useState("")
    let [shortDescription,setShort]=useState("")
    let [longDescription,setLong]=useState("")
    let [thumbnailUrl,setUrl]=useState("")

    let Navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();
        let bookData={title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}

        //posting to server
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added successfully')
        Navigate('/admin/book-list')
    }
    return (
        <div className="addbook">
            <h1>Add a book</h1>
            <div className="form">
                <form action="" className="form_group" onSubmit={handleSubmit} >
                    <div className="title">
                        <input value={title} onChange={(e)=>seTitle(e.target.value)} type="text" required placeholder="Title of the book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e)=>setCategory(e.target.value)} type="text" required placeholder="Categories" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e)=>setAuthor(e.target.value)} type="text" required placeholder="Name of author" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setPage(e.target.value)} type="text" required placeholder="Pagecount" />
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(e)=>setShort(e.target.value)} name="shortdescription" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e)=>setLong(e.target.value)} name="longdescription" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>setUrl(e.target.value)} type="text" placeholder="thumbnailUrl" />
                    </div>
                    <button className="">Add Book</button>
                </form>
            </div>
        </div>
    )
}
export default AddBook;