import React, { useState, useEffect } from 'react'

import { getPOHistory } from '../../utils/storage'

import CommonListComponent from '../../components/Common/CommonListComponent'

const POHistory = function() {
    const pageName = 'PO History'

    return(
        <CommonListComponent
            getDisplayData={getPOHistory}
            pageName={pageName}
        />

    )
}

export default POHistory