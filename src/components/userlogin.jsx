import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../styles/userlogin.css';

const UserLogin = () => {
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()
    let Navigate = useNavigate()
    let Login = () => {
        Navigate('/user/')
    }
    return (
        <div className="userlogin">
            <div className="formu">
                <h1>Login as User</h1>
                <div className="form_input p-5">
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
    );
}

export default UserLogin;