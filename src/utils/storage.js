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

  inventory: {}
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
