import React, { useState } from 'react'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';




function Counter() {
    const [value, setValue] = useState(0)

    return (
        <>
            <div className="container  mt-5" style={{width:"300px"}}>
                <div className="container d-flex justify-content-center ">
                    <CIcon icon={icon.cilCaretTop} style={{ width: "5rem" }} onClick={() => { setValue(value + 1) }} />
                </div>
                <div className="container d-flex justify-content-between ">
                    <CIcon icon={icon.cilCaretLeft} style={{ width: "5rem" }} onClick={() => { setValue(value - 10) }} />
                    <h1 className='mt-3'>{value}</h1>
                    <CIcon icon={icon.cilCaretRight} style={{ width: "5rem" }} onClick={() => { setValue(value + 10) }} />
                </div>
                <div className="container d-flex  justify-content-center" >
                    <CIcon icon={icon.cilCaretBottom} style={{ width: "5rem" }} onClick={() => { setValue(value - 1) }} />
                </div>
            </div>
        </>
    )
}

export default Counter