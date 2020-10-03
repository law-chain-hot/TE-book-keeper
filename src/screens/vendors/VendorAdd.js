import React from 'react'

import AntForm from '../../components/Forms/AntFormVendor'

const VendorAdd = function () {
    const arrayName = [
        'companyName',
        'part',
        'priceUnit',
        'address1',
        'address2',
        'city',
        'state',
        'zipCode',
    ]

    const generateItems = (arrayName) => {
        return arrayName.map(name => {
            return {
                name: name
            }
        })
    }

    return (
        <div className='centerBox'>
            Add Vendor
            <AntForm  items={generateItems(arrayName)}/>
        </div>
    )
}




export default VendorAdd