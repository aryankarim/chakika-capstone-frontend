import React from 'react'
import { Link } from "react-router-dom"

export default function AccountCard() {
    const logout = () => {
        localStorage.removeItem('Chakika_token')
    }

    return (
        <div className="container">
            <div className="account-profile shadow account">
                <div>
                    <div className="account-center account-top">
                        <h3>{localStorage.getItem('chakika_fullname')} <span className="font-weight-light">, 24</span></h3>
                        <div className="account-element">
                            <i>
                            </i>Nissan Sentra 2021
                        </div>
                        <div>
                            <i></i>{localStorage.getItem('chakika_email')}
                        </div>
                        <div className="account-element">
                            <i></i>555-5555
                        </div>
                     </div>
                    <div className="account-top account-bottom border-top account-center">
                        <div className="justify-account-center">
                            <div>
                                <div>
                                    <Link to='/login' className="logOutButton" onClick={logout}>Log Out</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
