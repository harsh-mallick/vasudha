import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Singup from './Components/Signup';
import Navbar from './Components/Navbar'
import About from './Components/About'
import Logout from './Components/Logout';
import Buyer from './Components/Buyer';
import Transporter from './Components/Transporter';
import NotificationFarmer from './Components/Notification-farmer';
import Requests from './Components/MyRequest_Buyer';
import OurTeam from './Components/OurTeam';
import WeatherDetails from './Components/WeatherDetails';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Singup />} />
          <Route path='/about' element={<About />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/buyer' element={<Buyer />} />
          <Route path='/transporter' element={<Transporter />} />
          <Route path='/notification-farmer' element={<NotificationFarmer />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/team' element={<OurTeam/>}/>  
          <Route path='/weatherdetails' element={<WeatherDetails/>}/>     
          
        </Routes>
      </Router>

  );
}

export default App;
