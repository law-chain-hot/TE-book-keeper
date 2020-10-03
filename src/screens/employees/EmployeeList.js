import React, { useState, useEffect } from 'react'
import { getEmployee } from '../../utils/storage'
import CommonListComponent from '../../components/Common/CommonListComponent'




const EmployeeList = function() {
    const pageName = 'Employee List'

    return(
        <CommonListComponent
            getDisplayData={getEmployee}
            pageName={pageName}
        />
    )
}

export default EmployeeList