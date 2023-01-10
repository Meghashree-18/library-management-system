import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const AddBook = () => {
    let navigate=useNavigate()
      let[title,settitle]=useState("")
      let[authors,setauthors]=useState("")
      let[categories,setcategories]=useState("")
      let[pageCount,setpageCount]=useState("")
      let[shortDescription,setshortDescription]=useState("")
      let[longDescription,setlongDescription]=useState("")
      let[thumbnailUrl,setthumbnailUrl]=useState("")
      let handleSubmit=(e)=>{
      e.preventDefault();
      //data to be posted
      let bookdata={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
      
      //posting to server
      fetch('http://localhost:3001/books',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(bookdata)
      })
      alert('Book added successful')
      navigate('/admin/book-list')
      
    }
    

    //title,categories,authors,pagecount,shortDescription,longDescription,thumbnailUrl
    return ( 
        <div className="addbook">
            <h1>Add a book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title" >
                        <input value={title} onChange={(e)=>settitle(e.target.value)} type="text" required placeholder="title of the book"/>
                    </div>
                    <div className="authors">
                    <input value={authors} onChange={(e)=>setauthors(e.target.value)} type="text" required placeholder="author of the book"/>
                    </div>
                    <div className="categories">
                    <input value={categories} onChange={(e)=>setcategories(e.target.value)} type="text" required placeholder="category of the book"/>
                    </div>
                    <div className="pageCount">
                    <input value={pageCount} onChange={(e)=>setpageCount(e.target.value)}type="number" required placeholder="CountPage"/>
                    </div>
                    <div className="shortDescription">
                    <textarea value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)} placeholder="shortDescription" cols="50" rows="30"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} placeholder="longDescription" cols="50" rows="30"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                    <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)}type="text" required placeholder="image of the book"/>
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;