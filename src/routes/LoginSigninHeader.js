import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import chakika from './images/header-bgfliped.png'


export default function LoginSigninHeader(props) {
    const [currentTab, setTab] = useState(true)

    const signin = () => {
        if (currentTab === false)
            setTab(prevTab => !prevTab)
    }
    const signup = () => {
        if (currentTab === true)
            setTab(prevTab => !prevTab)
    }
    return (
        <div className="register">
            
            <div className="register-side"><Link to='/' className="register-side-logo"></Link>
            </div>
            <img src={chakika} alt="" className="register-side-img"></img>
            <div className="register-form">
                <div className="register-login">
                    <button onClick={signin} className="register-login-item">Sign In</button>
                    <button onClick={signup} className="register-login-item">Sign Up</button>
                </div>
                <div className="register-form-title">
                    {currentTab ? <LoginPage {...props} /> : <RegisterPage signin={signin} />}
                </div>
            </div>
        </div>
    )
}
