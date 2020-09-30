import React, { useState, useEffect } from 'react'
import AntTable from '../../components/AntTable'

import { getCustomers } from '../../utils/storage'
import mapTitle from '../../utils/mapTitle'

const CustomerList = function () {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        setCustomers(getCustomers())
    }, [])

    function setCol(customers) {

        if (customers.length === 0) return []
        return Object.keys(customers[0]).map(cur => {

            return {
                title: mapTitle[cur],
                dataIndex: cur,
                key: cur,
            }
        })
    }

    const col = setCol(customers)

    return (
        <div>
            Customer List
            <AntTable data={customers} col={col} />
        </div>
    )
}

export default CustomerList