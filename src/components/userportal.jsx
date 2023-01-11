import { Routes,Route } from "react-router-dom";
import UserDashboard from "./userDashboard";
import UserNavbar from "./usernavbar";
import BookList from "./booklist";
import ReadBook from "./readbook";

const UserPortal=()=>{
    return(
        <div className="userportal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path='/book-list/:id' element={<ReadBook/>}/>
            </Routes>
        </div>
    )
}
export default UserPortal;