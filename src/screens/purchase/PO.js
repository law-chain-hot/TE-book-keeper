import React from 'react'

import AntFormOfPO from '../../components/Forms/AntFormCreatePO'
import { getVendors } from '../../utils/storage'

const PO = function () {
    const vendors = getVendors()


    return (
        <div className='centerBox'>
            PO
            <AntFormOfPO vendors={vendors} />
        </div>

    )
}

export default PO