import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import auth from '../Auth'
import axios from 'axios'
import makeToast from "../Toaster";
import '../styles/loginAndRegister.css'

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
            makeToast("success", response.data.message);//makes life easier if message was not defined it will catch it
            localStorage.setItem("Chakika_token", response.data.token);
            props.history.push("/");
        }).catch((err) => {
            console.log(err);
        });

    }

    return (
        <div className="FormCenter">
            <form onSubmit={handleSubmit} className="FormFields" >
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={userState.email} onChange={handleChange} />
                </div>

                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={userState.password} onChange={handleChange} />
                </div>

                <div className="FormField">
                    <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                </div>
            </form>
        </div>
    )
}
