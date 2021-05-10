import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom';
import auth from "../Auth";
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { fetchCartSuccessful, loadingForCartItems } from '../actions'
import makeToast from '../Toaster'

export default function ProtectedRoute({ component: Component, ...rest }) {
    const [verify, setverify] = useState('pending')
    const dispatch = useDispatch();

    useEffect(() => {

        auth.isAuthenticated().then((res) => {
            if (res === true) {
                setverify('authenticated')
                fetchData()
            } else {
                setverify('unauthenticated')
            }
            console.log('in auth then');
            console.log(res);
        }).catch(() => {
            console.log('data fetch err')
        })
        function fetchData() {
            const fetchCartItems = () => {
                return function (dispatch) {
                    dispatch(loadingForCartItems())
                    axios.get('http://localhost:8000/cart/allItems', {
                        headers: {
                            authorization: "Bearer " + localStorage.getItem("Chakika_token"),
                        }
                    }).then(res => {
                        console.log(res.data.message);
                        dispatch(fetchCartSuccessful(res.data.message))
                    }).catch((error) => {
                        makeToast('error', error)
                    })
                }
            }
            dispatch(fetchCartItems())
        }
    }, [dispatch])




    if (verify === 'pending') {
        return (<div className="loader"></div>)
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