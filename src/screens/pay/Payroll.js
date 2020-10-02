import React, { useState, useEffect } from 'react'
import AntTable from '../../components/AntTable'

import { getPayroll } from '../../utils/storage'
import mapTitle from '../../utils/mapTitle'


const PayrollList = function () {
    const [payroll, setPayroll] = useState([])
    useEffect(() => {
        setPayroll(getPayroll())
    }, [])

    function setCol(payroll) {
        if (payroll.length === 0) return []
        return Object.keys(payroll[0]).map(cur => {
            return {
                title: mapTitle[cur],
                dataIndex: cur,
                key: cur,
            }
        })
    }

    const col = setCol(payroll)

    return (
        <div>
            Payroll List
            <AntTable data={payroll} col={col} />
        </div>
    )
}

export default PayrollList