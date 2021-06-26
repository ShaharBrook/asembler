import React, {useContext} from "react";
import './staticMemory.css';
import {AppContext} from "../../../context/context";
import Register from "./register/register";

const StaticMemory = () => {
    const {registers} = useContext(AppContext);

    return <div className="static-memory">
        <div className="registers-container">
            <h2>Registers:</h2>
            {registers.map((value, index) => <Register name={`R${index + 1}`} value={value}/>)}
        </div>
    </div>
};

export default StaticMemory;