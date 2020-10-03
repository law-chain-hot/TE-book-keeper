import React, { useEffect } from 'react';
import './App.css';

import Siderbar from './layouts/Siderbar'
import { BrowserRouter, Route } from 'react-router-dom'
import * as RouterName from './routers/router'

import EmployeeList from './screens/employees/EmployeeList'
import EmployeeAdd from './screens/employees/EmployeeAdd'
import CustomerList from './screens/customers/CustomerList'
import CustomerAdd from './screens/customers/CustomerAdd'
import VendorList from './screens/vendors/VendorList'
import VendorAdd from './screens/vendors/VendorAdd'
import PayEmployee from './screens/pay/PayEmployee'
import Payroll from './screens/pay/Payroll'
import Inventory from './screens/inventory/Inventory'
import Invoice from './screens/invoice/CreatInvoice'
import InvoiceHistory from './screens/invoice/InvoiceHistory'
import PO from './screens/purchase/PO'
import POHistory from './screens/purchase/POHistory'
import IncomeStatement from './screens/incomestatement/IncomeStatement'
import BalanceSheet from './screens/balanceSheet/BalanceSheet'





import { getDataFromLocal } from './utils/storage'

getDataFromLocal()

function App() {


  const currContents = (
    <div>
      <Route path={RouterName.EmployeeList} exact component={EmployeeList} />
      <Route path={RouterName.EmployeeAdd} exact component={EmployeeAdd} />
      <Route path={RouterName.CustomerList}  exact component={CustomerList} />
      <Route path={RouterName.CustomerAdd}  exact component={CustomerAdd} />
      <Route path={RouterName.VendorList}  exact component={VendorList} />
      <Route path={RouterName.VendorAdd}  exact component={VendorAdd} />
      <Route path={RouterName.PayEmployee}  exact component={PayEmployee} />
      <Route path={RouterName.Payroll}  exact component={Payroll} />
      <Route path={RouterName.Inventory}  exact component={Inventory} />
      <Route path={RouterName.Invoice}  exact component={Invoice} />
      <Route path={RouterName.InvoiceHistory}  exact component={InvoiceHistory} />
      <Route path={RouterName.PO}  exact component={PO} />
      <Route path={RouterName.POHistory}  exact component={POHistory} />
      <Route path={RouterName.IncomeStatement}  exact component={IncomeStatement} />
      <Route path={RouterName.BalanceSheet}  exact component={BalanceSheet} />


    </div>
  )



  return (
    <Siderbar
      contents={currContents}
    />
  );
}

export default App;
