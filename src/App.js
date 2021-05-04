import React from 'react';
import DashbordLogin from './File/Doctall/Admin/DashbordLogin/DashbordLogin';
import DoctorCreatePasswordScreen from './File/Doctall/Admin/DoctorCreatePasswordScreen/DoctorCreatePasswordScreen';
import LoginScreenWithSuccessful from './File/Doctall/Admin/DoctorCreatePasswordScreen/LoginScreenWithSuccessful';
import AdminFillsDoctorInformation from './File/Doctall/Admin/DoctorRegistrationByAdmin/AdminFillsDoctorInformation';

import DoctorRegistrationScreen from './File/Doctall/Admin/DoctorRegistrationByAdmin/DoctorRegistrationScreen';
import ForgotPassword from './File/Doctall/Admin/ForgotPassword/ForgotPassword';
import Screen5 from './File/Doctall/Admin/ForgotPassword/Screen/Screen5';
import UploadDocumentScreen from './File/Doctall/Admin/UploadDocumentScreen/UploadDocumentScreen';

function App() {
  return (
    <div className="App">
      {/* <DashbordLogin /> */}
      {/* <DoctorCreatePasswordScreen /> */}
      {/* <LoginScreenWithSuccessful /> */}
      {/* <ForgotPassword /> */}
      {/* <DoctorRegistrationScreen /> */}
      <AdminFillsDoctorInformation />
      {/* <UploadDocumentScreen /> */}
    </div>
  );
}

export default App;
