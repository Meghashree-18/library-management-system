import '../Styles/BookList.css';
import { useState, useEffect } from "react";
import { useNavigate,useLocation, Navigate} from 'react-router-dom';
const BookList = () => {
    let [books, setbooks] = useState([])
    // to fetch the route value
    let location=useLocation()

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:3001/books')
            let data = await response.json()
            setbooks(data)
        }
        fetchData()
    }, [books])
    let handleDelete = (id, title) => {
        fetch(`http://localhost:3001/books/${id}`, {
            method: 'DELETE'
        });
        alert(`${title} will be deleted permanently`)
    }
    let navigate=useNavigate()
    let read=(id)=>{
        if(location.pathname=="/admin/book-list"){
        navigate(`/admin/book-list/${id}`)
    }else{
        navigate(`/user/book-list/${id}`)
    }
}

    return (
        <div className="booklist">
            <h1>Book List :{books.length}</h1>
            <div className="books_section">
                {books.map(data => (
                    <div className="layout">
                        <div className="image123">
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="book_card">
                            <h2>{data.title}</h2>
                            {/* <h2>{[data.authors]}</h2> */}
                            <h3>Author:{data.authors.toString()}</h3>
                            <h4><b> Category:{data.categories.toString()}</b></h4>
                            <h4>PageCount:{data.pageCount}</h4>
                            <button onClick={()=>read(data.id)}>Read more</button>
                            {location.pathname=="/admin/book-list" && <button onClick={() => handleDelete(data.id, data.title)}>Delete</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;