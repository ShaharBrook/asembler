import React, {useState} from "react";

const CodeArea = () => {
    const [codeText, setCodeText] = useState('');

    const onChange = ({target}) => {
        const {value} = target;
        setCodeText(value);
    };

    return <div className='code-input-container'>
        <div className='line-numbers-container'>
            {
                codeText.split('\n').map((line, index) => (<div key={`line-${index}`}>{index + 1}</div>))
            }
        </div>
        <textarea onChange={onChange} value={codeText}/>
    </div>
};

export default CodeArea;