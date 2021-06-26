import React from "react";
import './register.css';

const Register = ({name, value}) => {
    return <div className='register'>
        <span className="register-name">{name}</span>
        <span className="register-value">{value}</span>
    </div>
};

export default Register;