import { useState } from "react";
import {useNavigate } from "react-router-dom";
import '../styles/adminlogin.css';

const AdminLogin = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let Navigate=useNavigate();

    let Login = (e) => {
        e.preventDefault();
        let data = { email, password }
        console.log(data);

        //admin validation
        if (email == "admin@gmail.com" && password == 123) {
            Navigate('/admin/')
        } else {
            alert('Invalid credentials')
        }
    }
    return (
        <div className="adminlogin">
            <div className="form">
                <h1>Login as Admin</h1>
                <div className="formm">
                    <form onSubmit={Login}>
                        <div className="email">
                            <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} className="email-address" />
                        </div>
                        <div className="password">
                            <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="password" />
                        </div>
                        <button className="btn-btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;