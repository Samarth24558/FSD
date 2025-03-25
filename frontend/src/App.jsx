import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import Students from './layout/Content/Students';
import Register from './layout/Content/Register';
import CIE from './layout/Content/CIE';
import CIEB from './layout/Content/CIEB';

import RegisterCIE from './layout/Content/RegisterCIE';
import Fees from './layout/Content/Fees';
import RegisterFees from './layout/Content/RegisterFees';
import Feesinvoice from './layout/Content/Feesinvoice';
import UpdateFees from './layout/Content/Updatefees';
import Annualday from './layout/Content/Annualday';
import Settings from './layout/Content/Settings';
import Update from './layout/Content/update_stud';
import UpdateAnnualday from './layout/Content/Updateannualday';
import Register_Annualady from './layout/Content/Register_Annualday';
import Loginapp from './layout/Content/loginform';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const AppLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';

  return (
    <div className='app'>
      {!isLoginPage && <Sidebar />}
      <Routes>
        <Route path='/Login' element={<Loginapp />} />
        <Route path='/' element={<Content />} />
        <Route path='/Home' element={<Content />} />
        <Route path='/Students' element={<Students />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/CIE' element={<CIE />} />
        <Route path='/CIEB/:invoice_no' element={<CIEB />} />
        <Route path='/RegisterCIE' element={<RegisterCIE />} />
        <Route path='/Fees' element={<Fees />} />
        <Route path='/RegisterFees' element={<RegisterFees />} />
        <Route path='/Annualday' element={<Annualday />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/Update_Stud/:stud_id' element={<Update />} />
        <Route path='/Registerannaulday' element={<Register_Annualady />} />
        <Route path='/feesinvoice/:invoice_no' element={<Feesinvoice />} />
        <Route path='/updatefees/:invoice_no' element={<UpdateFees />} />
        <Route path='/updateannualday/:invoice_no' element={<UpdateAnnualday />} />

      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
