import React, { useEffect } from 'react';
import './App.css';

import Siderbar from './layouts/Siderbar'
import { BrowserRouter, Route } from 'react-router-dom'

import EmployeeList from './screens/employees/EmployeeList'
import EmployeeAdd from './screens/employees/EmployeeAdd'
import CustomerList from './screens/customers/CustomerList'
import CustomerAdd from './screens/customers/CustomerAdd'
import VendorList from './screens/vendors/VendorList'
import VendorAdd from './screens/vendors/VendorAdd'

import { getDataFromLocal } from './utils/storage'

getDataFromLocal()

function App() {


  const currContents = (
    <div>
      <Route path='/employeelist' exact component={EmployeeList} />
      <Route path='/employeeadd' exact component={EmployeeAdd} />
      <Route path='/customerlist' exact component={CustomerList} />
      <Route path='/customeradd' exact component={CustomerAdd} />
      <Route path='/vendorlist' exact component={VendorList} />
      <Route path='/vendoradd' exact component={VendorAdd} />
    </div>
  )



  return (
    <Siderbar
      contents={currContents}
    />
  );
}

export default App;
