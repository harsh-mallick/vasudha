import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Singup from './Components/Signup';
import Navbar from './Components/Navbar'
import About from './Components/About'
import Logout from './Components/Logout';
import NotificationTransporter from './Components/Notification-transporter';
import Requests from './Components/MyRequest_Buyer';
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
          <Route path='/requests-transporter' element={<NotificationTransporter />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/team' element={<OurTeam/>}/>       
        </Routes>
      </Router>

  );
}

export default App;
