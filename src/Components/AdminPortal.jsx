import AdminNavbar from './AdminNavbar';
import { Routes, Route } from 'react-router-dom';
import AdminDasboard from './AdminDashboard';
import BookList from './BookList';
import UserList from './UserList';
import ReadBook from './readBook';
import AddBook from './AddBook';
import AddUser from './AddUser';

const AdminPortal = () => {
    return (
        <div className="AdminPortal">
            <AdminNavbar />
            <Routes>
                <Route path='/' element={<AdminDasboard />} />
                <Route path='/book-list' element={<BookList />} />
                <Route path='/book-list/:id' element={<ReadBook/>}/>
                <Route path='/add-book' element={<AddBook/>}/>
                <Route path='/user-list' element={<UserList/>}/>
                <Route path='/add-user' element={<AddUser/>}/>
            </Routes>
        </div>
    );
}

export default AdminPortal;