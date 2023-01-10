import '../Styles/AdminNavbar.css'
import { Link } from "react-router-dom";
const AdminNavbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <h1>AdminPortal</h1>
            </div>
            <div className="navbar_links">
                <ul>
                    <li><Link to="/admin/*">Dashboard</Link></li>
                    <li><Link to="/admin/add-book">AddBook</Link> </li>
                    <li><Link to="/admin/add-user">AddUser</Link></li>
                    <li><Link to="/admin/book-list">BookList</Link></li>
                    <li><Link to="/admin/user-list">UserList</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
           
        </div>
     );
}
 
export default AdminNavbar;