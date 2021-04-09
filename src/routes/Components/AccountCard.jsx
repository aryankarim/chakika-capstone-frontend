import React from 'react'
import { Link } from "react-router-dom"
import auth from '../../Auth'

export default function AccountCard() {
    const logout = () => {
        localStorage.removeItem('Chakika_token')
    }

    return (
        <div class="container">
            <div class="card-profile shadow mt--300 card">
                <div class="px-4">
                    <div class="text-center mt-5">
                        <h3>{localStorage.getItem('chakika_fullname')} <span class="font-weight-light">, 24</span></h3>
                        <div class="h6 font-weight-300">
                            <i class="ni location_pin mr-2">
                            </i>Nissan Sentra 2021
                                    </div>
                        <div class="h6 mt-4">
                            <i class="ni business_briefcase-24 mr-2"></i>{localStorage.getItem('chakika_email')}
                        </div>
                        <div class="h6 mt-4">
                            <i class="ni business_briefcase-24 mr-2"></i>555-5555
                                    </div>
                    </div>
                    <div class="mt-5 py-5 border-top text-center">
                        <div class="justify-content-center row">
                            <div class="col-lg-9">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <Link to='/login' class="logOutButton" onClick={logout}>Log Out</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
