import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import auth from "../Auth";

export default function ProtectedRoute({ component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    return (<Component  {...props} />);//cuz routes cannot pass down costum props
                } else {
                    return (<Redirect
                        to={{
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }} />);
                }
            }}
        />
    );
}