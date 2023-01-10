import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const AddUser = () => {
    let navigate=useNavigate()
    let[name,setname]=useState('')
    let[age,setage]=useState('')
    let[email,setemail]=useState('')
    let[phoneNumber,setphoneNumber]=useState('')
    let handleSubmit=(e)=>{
        e.preventDefault();
        let user={name,age,email,phoneNumber}
        fetch('http://localhost:3001/users',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)
          })
          alert('User added successful')
      navigate('/admin/user-list')
    }
    return ( 
        <div className="adduser">
            <h1>Add a New User</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" value={name} onchange={(e)=>setname(e.target.value)} placeholder="enter the name"/>
                    </div>
                    <div className="age">
                    <input type="number" value={age} onchange={(e)=>setage(e.target.value)} placeholder="enter the age"/>
                    </div>
                    <div className="email">
                    <input type="email" value={email} onchange={(e)=>setemail(e.target.value)} placeholder="enter the email user"/>
                    </div>
                    <div className="phoneNumber">
                    <input type="tel" value={phoneNumber} onchange={(e)=>setphoneNumber(e.target.value)} minLength='10' maxLength='10' placeholder="enter the phonenumber"/>
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;