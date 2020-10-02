import React, { useState, useEffect } from 'react'
import AntTable from '../../components/AntTable'

import { getEmployee } from '../../utils/storage'
import mapTitle from '../../utils/mapTitle'


const EmployeeList = function () {
    const [empolyees, setEmpolyees] = useState([])
    useEffect(() => {
        setEmpolyees(getEmployee())
    }, [])

    function setCol(employees) {
        if (employees.length === 0) return []
        return Object.keys(employees[0])
                    .filter(keyName => keyName !=='id')
                    .map(cur => {
                        return {
                            title: mapTitle[cur],
                            dataIndex: cur,
                            key: cur,
                        }
                    })
    }

    const col = setCol(empolyees)

    return (
        <div>
            Bill is a cat.
            <AntTable data={empolyees} col={col} />
        </div>
    )
}

export default EmployeeList