import '../Styles/Addusers.css';
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Addusers = () => {
    let navigate=useNavigate()
    let [name, setname] = useState('')
    let [age, setage] = useState('')
    let [email, setemail] = useState('')
    let [phoneNumber, setphoneNumber] = useState('')
    let handleSubmit=(e)=>{
        e.preventDefault();
        //data to be posted
        let usersdata={name,age,email,phoneNumber}
        
        //posting to server
        fetch('http://localhost:3001/users',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(usersdata)
        })
        alert('user added successful')
        navigate('/admin/user-list')
        
      }
      
  
    return (
        <div className="Addusers">
            
            <div className="forms">
            <h1>Add a New user</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input className="style" type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter the name" />
                    </div>
                    <div className="age">
                        <input className="style" type="text" value={age} onChange={(e) => setage(e.target.value)} placeholder="Enter the age" />
                    </div>
                    <div className="email">
                        <input className="style" type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter the email adress" />
                    </div>
                    <div className="phoneNumber">
                        <input className="style" type="tel" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} maxLength={10} placeholder="Enter the phone Number" />
                    </div>
                    <button>Add Users</button>
                </form>
            </div>

        </div>
    );
}

export default Addusers;