import '../Styles/UserList.css';
import { useState,useEffect } from "react";
const UserList = () => {
    let[users,setusers]=useState([])
    
    useEffect(()=>{
        let fetchData=async()=>{
           let response = await fetch('http://localhost:3001/users')
           let data= await response.json()
           setusers(data)
        }
        fetchData()
    },[])
    let handleDelete=(id,name)=>{
        setusers(users.filter(x=>x.id!=id))
        alert(`${name} has been deleted`)
    }
    return (
        <div className="userList">
               <h1>User List :{users.length}</h1>
            <div className="users_section">
                {users.map(data=>(
                    <div className="user">
                        <h1>Name:{data.name}</h1>
                        <h6>Age:{data.age}</h6>
                        <h6>Email-Address:{data.email}</h6>
                        <h6>PhoneNumber:{data.phoneNumber}</h6>
                        <button onClick={()=> handleDelete(data.id,data.name) }>Delete</button>

                    </div>
                ))}
                </div>
        </div>
      );
}
 
export default UserList;