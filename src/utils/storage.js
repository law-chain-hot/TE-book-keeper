import getDate from './getDate'

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

  inventory: {
    data: [
      {
        part: 'Iron',
        priceUnit: 1,
        quantity: 1000,
        value: 0
      },
      {
        part: 'Wood',
        priceUnit: 15,
        quantity: 200,
        value: 0
      },
    ]
  },

  expenses: {
    payroll: 0,
    payrollWithholding: 0,
    bills: 0,
    annualExpenses: 10000,
  },

  income: {
    otherIncome: 0,
    operatingIncome: 0,
    incomeTax: 0
  },

  assets: {
    cash: 100000,
    accountsReceivable: 0,
    inventory: 0,
    buildings: 100000, // no change
    equipment: 10000, // no change
    furniture: 10000, // no change
  },


  liabilites: {
    accountsPayable: 0,
    notesPayable: 0,
    accruals: 0,
  },

  invoiceHistory: {
    data: [

    ]
  },

  POHistory: {
    data: [

    ]
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

export const addPayroll = (employee) => {
  const [salary, withholding, dispusement] = calculatePay(employee)
  updateCash(-salary)
  updateExpenses('payroll', dispusement)
  updateExpenses('payrollWithholding', withholding)
  const payrollHistory = {
    date: getDate(),
    employee: `${employee.firstName} ${employee.lastName}`,
    salary: salary,
    withholding: withholding,
    dispusement: dispusement,
  }
  currData.payroll.data.push(payrollHistory)
}

export const calculatePay = (employee) => {
  return [employee.salary, employee.salary * 0.2, employee.salary * 0.8]
}

export const getPayroll = () => {
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



// get inventory
export const getInventory = () => {
  calculateInventoryValue(currData.inventory.data)
  updateLocal()
  return currData.inventory.data
}

const calculateInventoryValue = (inventory) => {
  inventory.forEach(part => {
    part.value = part.priceUnit * part.quantity
  })
}




// invoice
export const creatInvoice = ({ id, number }) => {
  const customer = currData.customers.data.find(employee => employee.id === id)
  if (checkInventory(number)) {
    makeInvoiceByCustomer(customer, number)
    updateLocal()
  } else {
    throw new Error('You do not have enough inventory')
  }
}

const makeInvoiceByCustomer = (customer, number) => {
  const value = customer.price * number
  const invoiceHistory = {
    invoiceNumber: currData.invoiceHistory.data.length + 1,
    date: getDate(),
    customer: customer.companyName,
    quantity: number,
    priceUnit: customer.price,
    total: value,
  }
  updateAccountsReceivable(value)
  updateInventory(number)
  currData.invoiceHistory.data.push(invoiceHistory)
}

const updateAccountsReceivable = (money) => {
  currData.assets.accountsReceivable += money
}

const updateInventory = (number) => {
  currData.inventory.data[0].quantity -= number * 4
  currData.inventory.data[1].quantity -= number
}

const checkInventory = (number) => {
  const inventoryData = currData.inventory.data
  if (inventoryData[0].quantity * 4 >= number && inventoryData[0].quantity >= number) {
    return true
  } else {
    return false
  }
}

export const getInvoice = () => {
  return currData.invoiceHistory.data
}





// PO
export const getPOHistory = () => {
  return currData.POHistory.data
}

export const creatPO = ({ id, number }) => {
  const vendor = currData.vendors.data.find(vendor => vendor.id === id)
  if (checkPO(number, vendor.priceUnit)) {
    makePOByVenor(vendor, number)
    updateLocal()
  } else {
    throw new Error('You do not have enough cash')
  }
}

const checkPO = (number, price) => {
  if (number * price <= currData.assets.cash) {
    return true
  } else {
    return false
  }
}

const makePOByVenor = (vendor, number) => {
  const value = vendor.priceUnit * number
  const POHistory = {
    PONumber: currData.POHistory.data.length + 1,
    date: getDate(),
    supplier: vendor.companyName,
    quantity: number,
    priceUnit: vendor.priceUnit,
    total: value,
  }
  updateAccountsPayable(value)
  updateInventoryByPO(number)
  currData.POHistory.data.push(POHistory)
}

const updateAccountsPayable = (money) => {
  currData.liabilites.accountsPayable += money
}

const updateInventoryByPO = (number) => {
  currData.inventory.data[0].quantity += number
  currData.inventory.data[1].quantity += number
}



// income statement
export const getIncome = () => {
  let sales = currData.assets.accountsReceivable
  let COGS = calculateCOGS()
  let grossProfit = sales - COGS

  let payroll = currData.expenses.payroll
  let payrollWithholding = currData.expenses.payrollWithholding
  let bills = currData.expenses.bills
  let annualExpenses = currData.expenses.annualExpenses
  let totalExpenses = payroll + payrollWithholding + bills + annualExpenses

  let otherIncome = currData.income.otherIncome
  let operatingIncome = grossProfit - totalExpenses
  let incomeTax = currData.income.incomeTax

  let netIncome = operatingIncome - incomeTax

  return {
    sales: sales,
    COGS: COGS,
    grossProfit: grossProfit,

    payroll: payroll,
    payrollWithholding: payrollWithholding,
    bills: bills,
    annualExpenses: annualExpenses,
    totalExpenses: totalExpenses,

    otherIncome: otherIncome,
    operatingIncome: operatingIncome,
    incomeTax: incomeTax,
    netIncome: netIncome
  }
}

const calculateCOGS = () => {
  let COGS = 0
  currData.invoiceHistory.data.forEach(invoice => {
    COGS += invoice.quantity * (0.5 + 10)
  })
  return COGS
}




// balance sheet
export const getBalanceSheet = () => {
  let cash = currData.assets.cash
  let accountsReceivable = currData.assets.accountsReceivable
  let inventory = getInventory().reduce((acc, cur) => acc + cur.value, 0)
  // console.log("getBalanceSheet -> getInventory", getInventory())
  let totalCurrenAssets = cash + accountsReceivable + inventory

  let land = currData.assets.buildings
  let equipment = currData.assets.equipment
  let furniture = currData.assets.furniture
  let totalFixAssets = land + equipment + furniture

  let totalAssets = totalCurrenAssets + totalFixAssets

  let accountsPayable = currData.liabilites.accountsPayable
  let notesPayable = currData.liabilites.notesPayable
  let accruals = currData.liabilites.accruals
  let totalCurrentLiabilities = accountsPayable + notesPayable + accruals

  let mortage = 0
  let totalLongTermDebt = 0

  let totalLiabilities = totalCurrentLiabilities + totalLongTermDebt

  let netWorth = totalAssets - totalLiabilities


  return {
    cash: cash,
    accountsReceivable: accountsReceivable,
    inventory: inventory,
    totalCurrenAssets: totalCurrenAssets,

    land: land,
    equipment: equipment,
    furniture: furniture,
    totalFixAssets: totalFixAssets,

    totalAssets: totalAssets,

    accountsPayable: accountsPayable,
    notesPayable: notesPayable,
    accruals: accruals,
    totalCurrentLiabilities: totalCurrentLiabilities,

    mortage: mortage,
    totalLongTermDebt: totalLongTermDebt,

    totalLiabilities: totalLiabilities,

    netWorth: netWorth,
  }
}

