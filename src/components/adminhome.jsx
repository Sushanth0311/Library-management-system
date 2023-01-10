import { Routes, Route } from 'react-router-dom';
import AddBook from './addbook';
import Adduser from './adduser';
import AdminDashboard from './adminDashboard';
import AdminNavbar from './adminnavbar';
import Booklist from './booklist';
import ReadBook from './readbook';
import Userlist from './userlist';

const Adminhome=()=>{
    return(
        <div className="adminhome">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path='/book-list' element={<Booklist/>}/>
                <Route path='/user-list' element={<Userlist/>}/>
                <Route path='/book-list/:id' element={<ReadBook/>}/>
                <Route path='/add-book' element={<AddBook/>}/>
                <Route path='/add-user' element={<Adduser/>}/>
            </Routes>
        </div>
    )
}
export default Adminhome;