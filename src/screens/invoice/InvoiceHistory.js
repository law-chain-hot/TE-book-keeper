import React, { useState, useEffect } from 'react'

import { getInvoice } from '../../utils/storage'

import CommonListComponent from '../../components/Common/CommonListComponent'

const InvoiceHistory = function() {
    const pageName = 'Invoice History'

    return(
        <CommonListComponent
            getDisplayData={getInvoice}
            pageName={pageName}
        />

    )
}

export default InvoiceHistory