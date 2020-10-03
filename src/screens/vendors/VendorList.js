import React, { useState, useEffect } from 'react'
import AntTable from '../../components/Tables/AntTable'

import { getVendors } from '../../utils/storage'
import mapTitle from '../../utils/mapTitle'


const VendorList = function () {
    const [vendors, setVendors] = useState([])
    useEffect(() => {
        setVendors(getVendors())
    }, [])

    function setCol(vendors) {
        if (vendors.length === 0) return []
        return Object.keys(vendors[0]).map(cur => {
            return {
                title: mapTitle[cur],
                dataIndex: cur,
                key: cur,
            }
        })
    }

    const col = setCol(vendors)

    return (
        <div>
            Vendor List
            <AntTable data={vendors} col={col} />
        </div>
    )
}

export default VendorList

