import React, { useState, useEffect } from 'react'

import { getPayroll } from '../../utils/storage'

import CommonListComponent from '../../components/Common/CommonListComponent'

const Payroll = function() {
    const pageName = 'Payroll list'

    return(
        <CommonListComponent
            getDisplayData={getPayroll}
            pageName={pageName}
        />

    )
}

export default Payroll