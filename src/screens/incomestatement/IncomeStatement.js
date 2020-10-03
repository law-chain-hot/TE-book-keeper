import React, { useState, useEffect } from 'react'

import { getIncome } from '../../utils/storage'

import IncomeStatementTable from '../../components/Tables/IncomeStatementTable'

const IncomeStatement = function() {
    const pageName = 'Income Statement'

    return(
        <IncomeStatementTable
            getDisplayData={getIncome}
            pageName={pageName}
        />

    )
}

export default IncomeStatement