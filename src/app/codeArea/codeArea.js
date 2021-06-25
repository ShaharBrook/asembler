import React, {useContext} from "react";
import {MyContext} from "../../context/context";

const CodeArea = () => {
    const {incA} = useContext(MyContext);

    return <div>
        <button onClick={incA}>inc</button>
        Code Area
    </div>
};

export default CodeArea;