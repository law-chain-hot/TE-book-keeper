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



const BalanceSheetTable = function (props) {
  const { getDisplayData, pageName } = props
  const [displayData, setDisplayData] = useState([])
  useEffect(() => {
    setDisplayData(getDisplayData())
  }, [])

  console.log("BalanceSheetTable -> displayData", displayData)


  const data1 = [
    {
      key: '1',
      name: 'Cash',
      money: displayData.cash,
    },
    {
      key: '2',
      name: 'Accounts Receivable',
      money: displayData.accountsReceivable,
    },
    {
      key: '3',
      name: 'Inventory',
      money: displayData.inventory,
    },
    {
      key: '4',
      name: 'Total Curren Assets',
      money: displayData.totalCurrenAssets,
    },
  ];

  const data2 = [
    {
      key: '1',
      name: 'Land/Building',
      money: displayData.land,
    },
    {
      key: '2',
      name: 'Equipment',
      money: displayData.equipment,
    },
    {
      key: '3',
      name: 'Furniture',
      money: displayData.furniture,
    },
    {
      key: '4',
      name: 'Total Fix Assets',
      money: displayData.totalFixAssets,
    },
  ];

  const data3 = [
    {
      key: '1',
      name: 'Total Assets',
      money: displayData.totalAssets,
    },
  ];

  const data4 = [
    {
      key: '1',
      name: 'Accounts Payable',
      money: displayData.accountsPayable,
    },
    {
      key: '2',
      name: 'Notes Payable',
      money: displayData.notesPayable,
    },
    {
      key: '3',
      name: 'Accruals',
      money: displayData.accruals,
    },
    {
      key: '4',
      name: 'Total Current Liabilities',
      money: displayData.totalCurrentLiabilities,
    },
  ]

  const data5 = [
    {
      key: '1',
      name: 'Mortage',
      money: displayData.mortage,
    },
    {
      key: '2',
      name: 'Total Long Term Debt',
      money: displayData.totalLongTermDebt,
    },
  ]

  const data6 = [
    {
      key: '1',
      name: 'Total Liabilities',
      money: displayData.totalLiabilities,
    },
  ]

  const data7 = [
    {
      key: '1',
      name: 'Net Worth',
      money: displayData.netWorth,
    },
  ]


  console.log(displayData)

  return (
    <div className='income-statement-container'>
      <h2>{pageName}</h2>
      <div className='income-statement'>

        <Table
          columns={createColumns('Current Assets')}
          dataSource={data1}
          pagination={false}
          bordered
        />

        <br />
        <Table
          columns={createColumns('Fixed Assets')}
          dataSource={data2}
          pagination={false}
          bordered
        />

        <br />
        <Table
          columns={createColumns('Total Assets')}
          dataSource={data3}
          pagination={false}
          bordered
        />

        <br />
        <Table
          columns={createColumns('Current Liabilities')}
          dataSource={data4}
          pagination={false}
          bordered
        />

        <br />
        <Table
          columns={createColumns('Long Term Debt')}
          dataSource={data5}
          pagination={false}
          bordered
        />

        <br />
        <Table
          columns={createColumns('Total Liabilities')}
          dataSource={data6}
          pagination={false}
          bordered
        />

        <br />
        <Table
          columns={createColumns('Net Worth')}
          dataSource={data7}
          pagination={false}
          bordered
        />

      </div>
    </div>
  )
}

export default BalanceSheetTable


