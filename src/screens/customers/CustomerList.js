import React, { useState, useEffect } from 'react'
import { getCustomers } from '../../utils/storage'
import CommonListComponent from '../../components/Common/CommonListComponent'



const CustomerList = function() {
    const pageName = 'Customers List'

    return(
        <CommonListComponent
            getDisplayData={getCustomers}
            pageName={pageName}
        />
    )
}

export default CustomerList