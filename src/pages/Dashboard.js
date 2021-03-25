import React, { useEffect } from 'react'
import auth from '../Auth'
import axios from 'axios'

export default function Dashboard(props) {
    useEffect(() => {
        axios
            .get('http://localhost:8000/authenticate', {
                headers: {
                    authorization: "Bearer " + localStorage.getItem("Chakika_token"),
                },
            })
            .then(response => {
                console.log(response)
                auth.authenticated = true
                console.log(auth.isAuthenticated());
                if (response.data.message === "verified") {
                    props.history.push('/home')
                } else {
                    props.history.push('/login')
                }
            })
            .catch(error => {
                console.log(error)
                props.history.push('/login')
            })

    }, [])
    return (
        <div>

        </div>
    )
}
