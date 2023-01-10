import '../Styles/LandingPage.css'
import { Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <div className="LandingPage">
           <div className="SelectLoginType">
           <h1>Library Management System</h1>
           <div className="image">
            <img height="100" width="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ICsz45w4T0ZH7xB7_8GpebJJMXjWlYjOvA&usqp=CAU" alt="" />
            <img height="100" width="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ICsz45w4T0ZH7xB7_8GpebJJMXjWlYjOvA&usqp=CAU" alt="" />
           </div>
          <button className='b1'> <Link to="/AdminLogin" className="Admin">Admin Login</Link></button>
           <button className='b2'><Link to="/UserLogin" className="User">User Login</Link></button>
           </div>
        </div>
    )
}
export default LandingPage;