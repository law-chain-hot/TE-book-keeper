import React, { useState, useEffect } from 'react'
import './IncomeStatement.css'
import { Table, Typography } from 'antd';
const { Text } = Typography;


function createColumns(title) {
  const col =
    [
      {
        title: title,
        dataIndex: 'name',
        render: text => text
      },
      {
        title: 'Amount ($)',
        className: 'column-money',
        dataIndex: 'money',
        align: 'right',
      },
    ];
  return col
}



const IncomeStatementTable = function (props) {
  const { getDisplayData, pageName } = props
  const [displayData, setDisplayData] = useState([])
  useEffect(() => {
    setDisplayData(getDisplayData())
  }, [])


  const data1 = [
    {
      key: '1',
      name: 'Sales',
      money: displayData.sales,
    },
    {
      key: '2',
      name: 'COGS',
      money: displayData.COGS,
    },
    {
      key: '3',
      name: 'Gross Profit',
      money: displayData.grossProfit,
    },
  ];

  const data2 = [
    {
      key: '1',
      name: 'Payroll',
      money: displayData.payroll,
    },
    {
      key: '2',
      name: 'Payroll Withholding',
      money: displayData.payrollWithholding,
    },
    {
      key: '3',
      name: 'Bills',
      money: displayData.bills,
    },
    {
      key: '4',
      name: 'Annual Expenses',
      money: displayData.annualExpenses,
    },
    {
      key: '5',
      name: 'Total Expenses',
      money: displayData.totalExpenses,
    },
  ];

  const data3 = [
    {
      key: '1',
      name: 'Other Income',
      money: displayData.otherIncome,
    },
    {
      key: '2',
      name: 'Operating Income',
      money: displayData.operatingIncome,
    },
    {
      key: '3',
      name: 'Income Tax',
      money: displayData.incomeTax,
    },
  ]

  const data4 = [
    {
      key: '1',
      name: 'Net Income',
      money: displayData.netIncome,
    },

  ]


  console.log(displayData)

  return (
    <div className='income-statement-container'>
      <h2>{pageName}</h2>
      <div className='income-statement'>

        <Table
          columns={createColumns('Sales')}
          dataSource={data1}
          pagination={false}
          bordered
        />

        <br />
        <Table
          columns={createColumns('Expenses')}
          dataSource={data2}
          pagination={false}
          bordered
        />

        <br />
        <Table
          columns={createColumns('Income')}
          dataSource={data3}
          pagination={false}
          bordered
        />

        <br />
        <Table
          columns={createColumns('Net Income')}
          dataSource={data4}
          pagination={false}
          bordered
        />

      </div>
    </div>
  )
}

export default IncomeStatementTable


