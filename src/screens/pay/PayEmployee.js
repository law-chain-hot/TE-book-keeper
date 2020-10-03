import React from 'react'

import AntForm from '../../components/Forms/AntFormPayEmployee'
import { getEmployee } from '../../utils/storage'

const PayEmployee = function () {
    const employee = getEmployee()
    return (
        <div className='centerBox'>
            Pay Employee
            <AntForm employees={employee} />
        </div>

    )
}

export default PayEmployee