import '../Styles/UserLogin.css'
import { Navigate, useNavigate } from "react-router-dom";
const UserLogin = () => {
    let Navigate=useNavigate()
    let login=()=>{
    Navigate('/user/')
    }
    return ( 
        <div className="userlogin">
            <div className="form container">
                <h1>Login as User</h1>
                <div className="form_input">
              
                    <form action="" onSubmit={login}>
                        <div className="email">
                        <input type="email" required  placeholder="email address" />
                        </div>
                        <div className="password">
                        <input type="password" required placeholder="enter password" /> 
                        </div>
                        <button className="Login">Login</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UserLogin;