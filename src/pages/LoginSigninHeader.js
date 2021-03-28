import React, { useState } from 'react'
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


export default function LoginSigninHeader() {
    const [signinTab, setTab] = useState(true)

    const signin = () => {
        if (signinTab === false)
            setTab(prevTab => !prevTab)
    }
    const signup = () => {
        if (signinTab === true)
            setTab(prevTab => !prevTab)
    }
    return (
        <div className="App">
            <div className="App__Aside"><a href="./Home" className="App__Aside__Logo"></a></div>
            <div className="App__Form">
                <div className="PageSwitcher">
                <button onClick={signin} className="PageSwitcher__Item">Sign In</button>
                <button onClick={signup} className="PageSwitcher__Item">Sign Up</button>
                </div>
                <div className="FormTitle">
                    {signinTab ? <LoginPage /> : <RegisterPage/>}
                </div>
            </div>
        </div>
    )
}
