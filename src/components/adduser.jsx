import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adduser.css"


const Adduser = () => {
    let [name,setName]= useState("")
    let [number,setNumber]=useState("")
    let [email,setEmail]=useState("")
    let [age,setAge]=useState("")

    let Navigate=useNavigate()
    
    let handleSubmit=(e)=>{
        e.preventDefault();
        let userData={name,number,email,age}
    
        //posting to server
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('user added successfully')
        Navigate('/admin/user-list')
    }



    return (
        <div className="adduserdiv">
            <h1>Hello</h1>
            <div className="adduser">
                <form action="" className="formm_group" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} required placeholder="Name of user"/>
                    </div>
                    <div className="number">
                        <input type="number" onChange={(e)=>setNumber(e.target.value)} value={number} required placeholder="Phone number of user" />
                    </div>
                    <div className="email">
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required placeholder="Email of user" />
                    </div>
                    <div className="age">
                        <input type="text" onChange={(e)=>setAge(e.target.value)} value={age} required placeholder="Age" />
                    </div>
                    <button className="adduserbn">Add User</button>
                </form>
                
            </div>

        </div>
    );
}

export default Adduser;