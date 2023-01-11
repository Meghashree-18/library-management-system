import '../Styles/AddBook.css';
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
            
            <div className="form1">
            <h1>Add a book</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="title" >
                        <input className="style" value={title} onChange={(e)=>settitle(e.target.value)} type="text" required placeholder="title of the book"/>
                    </div>
                    <div className="authors">
                    <input className="style" value={authors} onChange={(e)=>setauthors(e.target.value)} type="text" required placeholder="author of the book"/>
                    </div>
                    <div className="categories">
                    <input className="style" value={categories} onChange={(e)=>setcategories(e.target.value)} type="text" required placeholder="category of the book"/>
                    </div>
                    <div className="pageCount">
                    <input className="style" value={pageCount} onChange={(e)=>setpageCount(e.target.value)}type="number" required placeholder="CountPage"/>
                    </div>
                    <div className="shortDescription">
                    <textarea id="uni"  value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)} placeholder="shortDescription" cols="50" rows="8"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea id="uno"  value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} placeholder="longDescription" cols="50" rows="8"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                    <input className="style" value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)}type="text" required placeholder="image of the book"/>
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;