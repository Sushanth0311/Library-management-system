import { useState, useEffect } from "react";

const Userlist = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/users')
            let data = await response.json()
            setUsers(data);
        }
        fetchData()
    }, [])

    // let handleDelete=(name)={
    //     setUsers(users.filter(x=>x.name!=name))
    //     alert(`${users} has been removed`)
    // }

    return (
        <div>
            <h1>User List</h1>
            <div className="userlist">
                {users.map(data=>(
                <div className="user card">
                    <h2>{data.name}</h2>
                    <h4>Age: <br /> {data.age}</h4>
                    <h4>Ph No: {data.phonenumber}</h4>
                    <h4>Email: {data.email}</h4>
                    {/* <button onClick={()=>handleDelete(data.name)}>Delete</button> */}
                </div>
            ))}
            </div>
        </div>

    );
}

export default Userlist;