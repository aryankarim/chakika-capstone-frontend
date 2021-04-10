import React, { useState } from 'react'
import auth from '../../Auth'
import makeToast from "../../Toaster";
import '../../styles/loginAndRegister.css'

export default function LoginPage(props) {
    const [userState, setUserState] = useState({ email: '', password: '' })
    const handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        setUserState(prevUserState => {
            return ({
                ...prevUserState,
                [name]: value
            })
        });
        console.log(userState);


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        auth.login(userState.email, userState.password).then((response) => {
            console.log(response);
            makeToast("success", response.data.message);//makes life easier if message was not defined it will catch it
            localStorage.setItem('chakika_fullname', response.data.name)
            localStorage.setItem('chakika_email', response.data.email)
            auth.authenticated = true
            localStorage.setItem("Chakika_token", response.data.token);
            props.history.push("/");
        }).catch((err) => {
            console.log(err);
        });

    }

    return (
        <div className="register-form-center">
            <form onSubmit={handleSubmit} className="register-form-fields" >
                <div className="register-form-field">
                    <label className="register-form-label" htmlFor="email">E-Mail Address</label>
                    <input type="email" id="email" className="register-form-input" placeholder="Enter your email" name="email" value={userState.email} onChange={handleChange} />
                </div>

                <div className="register-form-field">
                    <label className="register-form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="register-form-input" placeholder="Enter your password" name="password" value={userState.password} onChange={handleChange} />
                </div>

                <div className="register-form-field">
                    <button className="regitser-form-btn">Sign In</button>
                </div>

            </form>
        </div>

    )
}
