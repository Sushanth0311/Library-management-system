import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import AdminLogin from './components/adminlogin';
import UserLogin from './components/userlogin';
import Adminhome from './components/adminhome';
import UserPortal from './components/userportal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/user-login' element={<UserLogin />} />
          <Route path='/admin/*' element={<Adminhome />} />
          <Route path='/user/*' element={<UserPortal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
