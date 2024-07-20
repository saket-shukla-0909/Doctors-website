import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Homepage';
import About from './pages/Aboutpage';
import Contact from './pages/Contactpage';
import Prescription from './pages/Prescriptionpage';
import Login from './pages/Loginpage';
import MyProfilepage from './pages/MyProfilepage';
import PatientRegist from './pages/Patientregist';
import PatientLoginpage from './pages/PatientLoginpage';
import MyProfile from './pages/MyProfilespage';
import Pdashboard from './pages/Pdashboard';
import Pprescription from './pages/Pprescriptionpage';
import Patientlistpage from './pages/Patientlistpage';
import Dashboard from './pages/Dashboardpage';

import './css/pdash.css';
import './css/prescription.css';
import './css/home.css';
import './css/patientlist.css';
import './css/Myprof.css';
import './css/carouselslider.css';
import './css/patientregistC.css';
import './css/dashboard.css';
import './css/patientprofile.css'
import './css/ppres.css';
import './css/contact.css';
import './css/pdashboard.css';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>

            {/* For both doctors and patients navbar */}
              <Route path="/" element={<Home/>} />
              <Route path="/Aboutpage" element={<About/>} />
              <Route path="/Contactpage" element={<Contact/>} />
              <Route path="/Loginpage" element={<Login/>} />

              {/* for only doctors navbar only after login */}
              <Route path="/Patientregist" element={<PatientRegist/>} />
              <Route path="/MyProfilepage" element={<MyProfilepage/>}/>
              <Route path="/Prescriptionpage" element={<Prescription/>} />
              <Route path="/edit/:id" element={<Prescription/>} />
              <Route path="/Patientlistpage" element={<Patientlistpage/>} />
              <Route path="/PatientLoginpage" element={<PatientLoginpage/>} />
              <Route path="/Dashboardpage" element={<Dashboard/>} />

              {/* for only patients navbar only after login */}
              <Route path='/MyProfilespage' element={<MyProfile/>}/>
              <Route path='/Pdashboard' element={<Pdashboard/>}/>
              <Route path='/Pprescriptionpage' element={<Pprescription/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
