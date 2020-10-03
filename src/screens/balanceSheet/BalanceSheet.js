import React, { useState, useEffect } from 'react'

import { getBalanceSheet } from '../../utils/storage'

import BalanceSheetTable from '../../components/Tables/BalanceSheetTable'

const BalanceSheet = function() {
    const pageName = 'Balance Sheet'

    return(
        <BalanceSheetTable
            getDisplayData={getBalanceSheet}
            pageName={pageName}
        />

    )
}

export default BalanceSheet