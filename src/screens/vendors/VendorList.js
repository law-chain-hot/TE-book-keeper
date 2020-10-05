import React, { useState, useEffect } from 'react'

import { getVendors } from '../../utils/storage'
import CommonListComponent from '../../components/Common/CommonListComponent'



const VendorList = function () {
    const pageName = 'Vendors List'

    return(
        <CommonListComponent
            getDisplayData={getVendors}
            pageName={pageName}
        />
    )
}

export default VendorList



