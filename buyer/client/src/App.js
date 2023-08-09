import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Singup from './Components/Signup';
import Navbar from './Components/Navbar'
import About from './Components/About'
import Logout from './Components/Logout';
import Buyer from './Components/Buyer';
import Transporter from './Components/Transporter';
import Farmer from './Components/Farmer';
import NotificationFarmer from './Components/Notification-farmer';
import NotificationBuyer from './Components/Notification-buyer';
import NotificationTransporter from './Components/Notification-transporter';
import Request from './Components/Request';
import Requests from './Components/MyRequest_Buyer';
import Setinfo from './Components/Setinfo';
import OurTeam from './Components/OurTeam';

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
          <Route path='/farmer' element={<Farmer />} />
          <Route path='/notification-buyer' element={<NotificationBuyer />} />
          <Route path='/requests-transporter' element={<NotificationTransporter />} />
          <Route path='/notification-farmer' element={<NotificationFarmer />} />
          <Route path='/request' element={<Request />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/set-info' element={<Setinfo />} />   
          <Route path='/team' element={<OurTeam/>}/>       
        </Routes>
      </Router>

  );
}

export default App;
