
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import AdminPortal from './Components/AdminPortal';
import UserPortal from './Components/userPortal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/AdminLogin' element={<AdminLogin/>}/>
      <Route path='/UserLogin' element={<UserLogin/>}/>
      <Route path='/admin/*' element={<AdminPortal/>}/>
      <Route path='/user/*' element={<UserPortal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
