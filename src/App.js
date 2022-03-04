import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import  LoginPage from './pages/LoginPage';
import {Dashboard} from './pages/dashboard/dashboard';
import SalesOne from './pages/dashboard/SalesOne';
import SalesTwo from './pages/dashboard/SalesTwo';
import SalesThree from './pages/dashboard/SalesThree';
import SalesFour from './pages/dashboard/SalesFour';
import PrintComponent from './pages/dashboard/PrintComponent';
import Signup from './pages/Signup';
import ChildComponent from './pages/ChildComponent';
import PrintComponentTwo from './pages/dashboard/PrintComponentTwo';
import PrintComponentThree from './pages/dashboard/PrintComponentThree';
import CopyData from './pages/dashboard/CopyData';
import AddEmployee from './pages/AddEmployee';
import AddCustomerInfo from './pages/AddCustomerInfo';
import EmployeeTimein from './pages/EmployeeTimein';
import EmployeeTimeout from './pages/EmployeeTimeout';
import srDesktop from './img/srDesktop.png';
import srMobile from './img/srMobile.png';
import PrintComponentFour from './pages/dashboard/PrintComponentFour';
import SuccessAlert from './pages/dashboard/SuccessAlert';


function App() {
 const imageUrl = window.innerWidth>=650 ? srDesktop : srMobile;
  return (

      <div style={{backgroundImage:`url(${imageUrl})`}}>
      
       <Routes>
          <Route exact path="/" element={<LoginPage />}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/dashboard/salesOne" element={<SalesOne />} /> 
          <Route path="/dashboard/salesTwo" element={<SalesTwo />} /> 
          <Route path="/dashboard/salesThree" element={<SalesThree />} /> 
          <Route path="/dashboard/salesFour" element={<SalesFour />} /> 
          
          <Route path="/dashboard/print" element={<PrintComponent />} />
          <Route path="/dashboard/printTwo" element={<PrintComponentTwo />} />
          <Route path="/dashboard/printThree" element={<PrintComponentThree />} />
          <Route path="/dashboard/printFour" element={<PrintComponentFour />} />

          <Route path="/dashboard/child" element={<ChildComponent />} />
          <Route path="/next" element={<CopyData />} />
          <Route path="/dashboard/addEmp" element={<AddEmployee />} />
          <Route path="/dashboard/custInfo" element={<AddCustomerInfo />} />
          <Route path="/dashboard/timein" element={ <EmployeeTimein />} />
          <Route path="/dashboard/timeout" element={<EmployeeTimeout />} />
         

        </Routes>
        </div>

    );
}

export default App;
