import React, { useState, useEffect } from 'react'
import AntTable from '../Tables/AntTable'

import { getPayroll } from '../../utils/storage'
import mapTitle from '../../utils/mapTitle'


function setCol(displayData) {
    if (displayData.length === 0) return []
    console.log("setCol -> Object.keys(displayData[0]).filter(cur => cur !== 'id')", Object.keys(displayData[0]).filter(cur => cur !== 'id'))
    return Object.keys(displayData[0]).filter(cur => cur !== 'id').map(cur => {
        return {
            title: mapTitle[cur],
            dataIndex: cur,
            key: cur,
        }
    })
}


const CommonListComponent = function (props) {
    const {getDisplayData, pageName} = props
    const [displayData, setDisplayData] = useState([])
    useEffect(() => {
        setDisplayData(getDisplayData())
    }, [])

    const col = setCol(displayData)

    return (
        <div>
            <h2/>
            <h2>{pageName}</h2>
            <AntTable data={displayData} col={col} />
        </div>
    )
}

export default CommonListComponent