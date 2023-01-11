import UserNavbar from "./userNavbar";
import UserDashboard from "./userDashboard";
import { Route,Routes } from "react-router-dom";
import BookList from "./BookList";
import ReadBook from "./readBook";
const UserPortal = () => {
    return ( 
        <div className="userportal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path='/book-list/:id' element={<ReadBook/>}/>
            </Routes>
        
        </div>
     );
}
 
export default UserPortal;