import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { deleteCart } from '../../actions'

export default function AccountCard() {
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem('Chakika_token')
        dispatch(deleteCart())
    }

    return (
        <div className="container">
            <div className="account-profile shadow account">
                <div>
                    <div className="account-center account-top">
                        <h3>{localStorage.getItem('chakika_fullname')} </h3>
                        <div className="account-element">

                        </div>
                        <div>
                            <i></i>{localStorage.getItem('chakika_email')}
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
