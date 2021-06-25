import React, {useContext, useState} from "react";
import {AppContext} from "../../context/context";
import './codeArea.css';

const CodeArea = () => {
    const [codeText, setCodeText] = useState('');
    const {run} = useContext(AppContext);

    const runCode = () => {
        run(codeText);
    };

    const onChange = ({target}) => {
        const {value} = target;
        setCodeText(value);
    };

    return <div className='code-area code'>
        <div className='code-input-container'>
            <div className='line-numbers-container'>
                {
                    codeText.split('\n').map((line, index) => (<div key={`line-${index+1}`}>{index+1}</div>))
                }
            </div>
            <textarea onChange={onChange} value={codeText}/>
        </div>
        <button onClick={runCode}>run</button>
    </div>
};

export default CodeArea;