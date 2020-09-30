import React, { useState, useEffect } from 'react'
import AntTable from '../../components/AntTable'

import { getEmployee } from '../../utils/storage'

const EmployeeList = function () {
    const [empolyees, setEmpolyees] = useState([])
    useEffect(() => {
        setEmpolyees(getEmployee())
    }, [])

    function setCol(employees) {

        const mapTitle = {
            firstName: "First Name",
            lastName: "Last Name",
            address1: "Address 1",
            address2: "Address 2",
            city: "City",
            salary: "Salary",
            ssn: "SSN",
            state: "State",
            withholding: "Withholding",
            zipCode: "ZIP Code",
        }

        if (employees.length === 0) return []
        return Object.keys(employees[0]).map(cur => {

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