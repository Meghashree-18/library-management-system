import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const ReadBook = () => {
    let[book,setbook]=useState([])

    let params=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let response = await fetch(`http://localhost:3001/books/${params.id}`)
            let data=await response.json()
            setbook(data)
        }
        fetchData()
    })
    return ( 
        <div className="readBook">
            <div className="card">
            <h1>{book.title}</h1>
            <div className="card-footer">
                <p>{book.shortDescription}</p>
                <p>{book.longDescription}</p>
            </div>
            </div>
        
        </div>
     );
}
 
export default ReadBook;