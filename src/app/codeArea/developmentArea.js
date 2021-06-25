import React from "react";
import './developmentArea.css';
import DebugNavbar from "./debugNavbar/debugNavbar";
import CodeArea from "./codeArea/codeArea";

const DevelopmentArea = () => {

    return <div className='development-area code'>
        <DebugNavbar/>
        <CodeArea/>
    </div>
};

export default DevelopmentArea;