import React from 'react'

import AntForm from '../../components/Forms/AntFormCreateInvoice'
import { getCustomers } from '../../utils/storage'

const CreatInvoice = function () {
    const cutomers = getCustomers()


    return (
        <div className='centerBox'>
            Creat Invoice
            <AntForm cutomers={cutomers} />
        </div>

    )
}

export default CreatInvoice