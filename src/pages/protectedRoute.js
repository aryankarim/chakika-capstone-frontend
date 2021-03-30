import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom';
import auth from "../Auth";

export default function ProtectedRoute({ component: Component, ...rest }) {
    const [verify, setverify] = useState('pending')
    useEffect(() => {
        auth.isAuthenticated().then((res) => {
            if (res === true) {
                setverify('authenticated')
            } else {
                setverify('unauthenticated')
            }
            console.log('in suth then');
            console.log(res);
        }).catch(() => {
            console.log('data fetch err')
        })

    }, [])

    if (verify === 'pending') {
        return (<div class="loader"></div>)
    }
    return (
        <Route
            {...rest}
            render={props => {
                if (verify === 'authenticated') {
                    return (<Component  {...props} />);//cuz routes cannot pass down costum props
                } else {
                    return (<Redirect
                        to={{
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }} />);
                }
            }}
        />
    );
}