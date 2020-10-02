let defaultValue = {
  employees: {
    data: [
      // {
        // firstName: "123",
        // lastName: "123",
        // address1: "123",
        // address2: "123",
        // city: "123",
        // salary: "123",
        // ssn: "123123123",
        // state: "123",
        // withholding: "3123",
        // zipCode: "123",
      // }
    ]
  },

  customers: {
    data: [
      // {
      //   // companyName: 'Apple',
      //   // address: '310 E Springfield'
      // }
    ]
  },

  vendors: {
    data: [
    ]
  },


  payroll: {
    data: [
      // each history
    ]
  },

  inventory: {},

  expenses: {
    payroll: 0,
    payrollWithHolding: 0,
    bills: 0,
    annualExpenses: 0,
  },

  assets: {
    cash: 100000,
    accountsReceivable: 0,
    inventory: 0,
    buildings: 100000,
    equipment: 10000,
    furniture: 10000,
  }
};

let currData = null

const updateLocal = () => {
  localStorage.setItem('localData', JSON.stringify(currData))
  let data = JSON.parse(localStorage.getItem('localData'))
  // debug
  console.log('Successfully update the localStorage, current localData is:', data)
  console.dir(data)
}

export const getDataFromLocal = () => {
  currData = JSON.parse(localStorage.getItem('localData')) || defaultValue
  console.log("getDataFromLocal -> datcurrDataa", currData)
  // currData.employees.data.splice(1,1)
  // updateLocal()
}




// Employee
export const addEmployee = (employee) => {
  currData.employees.data.push(employee)
  updateLocal()
}

export const getEmployee = () => {
  return currData.employees.data
}




// Customer
export const addCustomer = (customer) => {
  currData.customers.data.push(customer)
  updateLocal()
}

export const getCustomers = () => {
  return currData.customers.data
}




// Vendor
export const addVendor = (vendor) => {
  currData.vendors.data.push(vendor)
  updateLocal()
}

export const getVendors = () => {
  return currData.vendors.data
}




// Pay
export const payByID = (id) => {
  const employee = currData.employees.data.find(employee => employee.id === id)
  addPayroll(employee)
  updateLocal()
}

export const addPayroll = (employee) =>{
  const [salary, withholding, dispusement] = calculatePay(employee)
  updateCash(-salary)
  updateExpenses('payroll', dispusement)
  updateExpenses('payrollWithHolding', withholding)
  const payrollHistory = {
    employee:`${employee.firstName} ${employee.lastName}`,
    salary: salary,
    withholding: withholding,
    dispusement: dispusement
  }
  currData.payroll.data.push(payrollHistory)
}

export const calculatePay = (employee) => {
  return [employee.salary, employee.salary * 0.2, employee.salary * 0.8]
}

export const getPayroll = () =>{
  return currData.payroll.data
}




// Cash
const updateCash = (money) => {
  currData.assets.cash += money
  updateLocal()
}




// expenses
const updateExpenses = (name, money) => {
  currData.expenses[name] += money
  updateLocal()
}
