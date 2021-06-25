import React from "react";
import './dataArea.css';
import StaticMemory from "./staticMemory/staticMemory";

const DataArea = () => {

    return <div className='full-container data-area'>
        <div className="static-memory-container">
            <StaticMemory/>
        </div>
        <div className="dynamic-memory-container">
            dynamic
        </div>
    </div>
};

export default DataArea;