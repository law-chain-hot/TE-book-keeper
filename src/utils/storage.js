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

let currData = JSON.parse(localStorage.getItem('localData')) || defaultValue

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
}


export const addEmployee = (employee) => {
  currData.employees.data.push(employee)
  updateLocal()
}


export const getEmployee = (employee) => {
  return currData.employees.data
}



