import React, { useState, useEffect } from 'react'

import { getInventory } from '../../utils/storage'

import CommonListComponent from '../../components/Common/CommonListComponent'

const Inventory = function() {
    const pageName = 'Inventory'

    return(
        <CommonListComponent
            getDisplayData={getInventory}
            pageName={pageName}
        />

    )
}

export default Inventory