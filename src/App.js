import React, { useEffect } from 'react';
import './App.css';

import Siderbar from './layouts/Siderbar'
import { BrowserRouter, Route } from 'react-router-dom'

import EmployeeList from './screens/employees/EmployeeList'
import EmployeeAdd from './screens/employees/EmployeeAdd'
import { getDataFromLocal } from './utils/storage'


function App() {

  useEffect(() => {
    getDataFromLocal()
  },[])

  const currContents = (
    <div>
      <Route path='/employeelist' exact component={EmployeeList} />
      <Route path='/employeeadd' exact component={EmployeeAdd} />
    </div>
  )



  return (
    <Siderbar
      contents={currContents}
    />
  );
}

export default App;
