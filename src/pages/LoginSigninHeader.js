import React, { useState } from 'react'
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


export default function LoginSigninHeader() {
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
        <div className="App">
            <div className="App__Aside"></div>
            <div className="App__Form">
                <div className="PageSwitcher">
                    <button onClick={signin} className="PageSwitcher__Item">Sign In</button>
                    <button onClick={signup} className="PageSwitcher__Item">Sign Up</button>
                </div>
                <div className="FormTitle">
                    {currentTab ? <LoginPage /> : <RegisterPage />}
                </div>
            </div>
        </div>
    )
}
