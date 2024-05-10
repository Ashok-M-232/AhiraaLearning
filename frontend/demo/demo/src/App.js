import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CSE from '../src/Component/Technology/CSE';
import EEE from '../src/Component/Technology/EEE';
import Mechanical from '../src/Component/Technology/Mechanical';
import Civil from '../src/Component/Technology/Civil';
import Management from '../src/Component/Technology/Management';
import Home from './Component/Home/Home';
import AI from './Component/CSE/AI';
import ML from './Component/CSE/ML';
import DS from './Component/CSE/DS';
import CLD1 from './Component/CSE/CLD1';
import Cybersecurity1 from './Component/CSE/Cybersecurity1';
import WEB from './Component/CSE/WEB';
import ARD1 from './Component/CSE/ARD1';
import BD1 from './Component/CSE/BD1';
import EV from './Component/EEE/EV'
import IOT from './Component/EEE/IOT';
import Emd from './Component/EEE/Emd';
import Robo from './Component/EEE/Robo';   
import PLC from './Component/EEE/PLC';   
import DELD from './Component/EEE/DELD';
import Coding from './Component/Technology/Coding';   
import CAD from './Component/Mech/CAD';
import ICENG from './Component/Mech/ICENG';
import MEV from './Component/Mech/MEV';
import CarDesign from './Component/Mech/CarDesign';
import DM from './Component/Management/DM';
import HR from './Component/Management/HR';
import Finance from './Component/Management/Finance';
import Stock from './Component/Management/Stock';
import Marketing from './Component/Management/Marketing';
import CRYPTOCURRENCY from './Component/Management/CRYPTOCURRENCY';
import Cad from './Component/Civil/Cad';
import CPBD from './Component/Civil/CPBD';
import Lms from './Component/Home/LMS/Lms';
import AboutUs from './Component/Home/AboutUs';
import Services from './Component/Home/Services';
import PaymentComponent from './Component/PaymentPage/PaymentComponent';
// import UserForm from './Component/Home/LMS/Admin/UserForm';
// import AdminDashBoard from './Component/Home/LMS/Admin/AdminDashBoard';
// import UserTable from './Component/Home/LMS/Admin/UserTable';
// import AdminSlide from './Component/Home/LMS/Admin/AdminSlide';
// import FormPage from './Component/Home/LMS/Admin/FormPage';
// import NewStdDetails from './Component/Home/LMS/Admin/NewStdDetails';
import ContactUs from './Component/Home/ContactUs';
import DataViewPage1 from './Component/Home/LMS/Admin/DataViewPage1';
// import PaytmPayment from './Component/Home/PaytmPayment';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AhiraaLearning" element={<DataViewPage1 />} />
        <Route exact path="/AhiraAAhiraALearninGPvTLtDDashboarD24" element={<DataViewPage1 />} />
        {/* <Route exact path="/UserForm" element={<UserForm />} />
        <Route exact path="/AdminDashBoard" element={<AdminDashBoard />} />
        <Route exact path="/UserTable" element={<UserTable />} />
        <Route exact path="/AdminSlide" element={<AdminSlide />} />
        <Route exact path="/FormPage" element={<FormPage />} />
        <Route exact path="/NewStdDetails" element={<NewStdDetails />} /> */}

        {/* <Route exact path="/Paytm" element={<PaytmPayment />} /> */}

        <Route path="/cse" element={<CSE />} />
        <Route path="/CSE/AI" element={<AI />} />
        <Route path="/CSE/ML" element={<ML />} />
        <Route path="/CSE/DataScience" element={<DS />} />
        <Route path="/CSE/CloudComputing" element={<CLD1 />} />
        <Route path="/CSE/CyberSecurity" element={<Cybersecurity1 />} />
        <Route path="/CSE/WebDevelopment" element={<WEB />} />
        <Route path="/CSE/AndroidDevelopment" element={<ARD1 />} />
        <Route path="/CSE/DBMS" element={<BD1 />} />


        <Route path="/eee" element={<EEE />} />
        <Route path="/EEE/EV" element={<EV />} />
        <Route path="/EEE/IOT" element={<IOT />} />
        <Route path="/EEE/ES" element={<Emd />} />
        <Route path="/EEE/Robotics" element={<Robo />} />
        <Route path="/EEE/PLC" element={<PLC />} />
        <Route path="/EEE/DELD" element={<DELD />} />
  

        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/Mech/AuroCad" element={<CAD />} />
        <Route path="/Mech/ICEngine" element={<ICENG />} />
        <Route path="/Mech/MEV" element={<MEV />} />
        <Route path="/Mech/CarDesign" element={<CarDesign />} />

        <Route path="/Civil" element={<Civil />} />
        <Route path="/Civil/AutoCad" element={<Cad />} />
        <Route path="Civil/CPBD" element={<CPBD />} />

        <Route path="/Coding" element={<Coding />} />
        <Route path="/LMS" element={<Lms />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/management" element={<Management />} />
        <Route path="/Management/DigitalMarketing" element={<DM />} /> 
        <Route path="/Management/HumanResources" element={<HR />} /> 
        <Route path="/Management/FINANCE" element={<Finance />} /> 
        <Route path="/Management/CRYPTOCURRENCY" element={<CRYPTOCURRENCY />} /> 
        <Route path="/Management/StockMarker" element={<Stock />} /> 
        <Route path="/Management/MARKETING" element={<Marketing />} /> 

        {/* PAYMENT_AREA */}
        {/* <Route path="/Payment-acknowledge-pre" element={<Acknowledge />} /> */}
        <Route path="/Payment7" element={<PaymentComponent />} />
        
      </Routes>
    </Router>
  );
}


export default App;
