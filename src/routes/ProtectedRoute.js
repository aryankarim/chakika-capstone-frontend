import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from '../Auth';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  fetchCartSuccessful,
  loadingForCartItems,
  fetchDiscountSuccessful,
  loadForDiscountFetch,
  fetchGarageSuccessful,
  loadForGarageFetch,
} from '../actions';
import makeToast from '../Toaster';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const [verify, setverify] = useState('pending');
  const dispatch = useDispatch();

  useEffect(() => {
    auth
      .isAuthenticated()
      .then((res) => {
        if (res === true) {
          setverify('authenticated');
          fetchData();
        } else {
          setverify('unauthenticated');
        }
        console.log('in auth then');
        console.log(res);
      })
      .catch(() => {
        console.log('data fetch err');
      });
    function fetchData() {
      const fetchCartItems = () => {
        return function (dispatch) {
          dispatch(loadingForCartItems());
          axios
            .get('https://blooming-citadel-16531.herokuapp.com/cart/allItems', {
              headers: {
                authorization:
                  'Bearer ' + localStorage.getItem('Chakika_token'),
              },
            })
            .then((res) => {
              dispatch(fetchCartSuccessful(res.data.message));
            })
            .catch((error) => {
              makeToast('error', error);
            });
        };
      };
      dispatch(fetchCartItems());

      function getDiscountItems() {
        return function (dispatch) {
          dispatch(loadForDiscountFetch());
          axios
            .get('https://blooming-citadel-16531.herokuapp.com/discount/', {
              headers: {
                authorization:
                  'Bearer ' + localStorage.getItem('Chakika_token'),
              },
            })
            .then((response) => {
              dispatch(fetchDiscountSuccessful(response.data.message));
            })
            .catch((err) => {
              console.log('error discount items', err);
            });
        };
      }
      dispatch(getDiscountItems());
    }
  }, [dispatch]);

  useEffect(() => {
    function getGarageDatas() {
      return function (dispatch) {
        dispatch(loadForGarageFetch());
        const config = {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('Chakika_token'),
          },
        };
        let one =
          'https://blooming-citadel-16531.herokuapp.com/category/categories';
        axios
          .get(one, config)
          .then((response) => {
            const responseOne = response.data.message;
            dispatch(fetchGarageSuccessful({ ...responseOne }));
            console.log(responseOne);
          })
          .catch((errors) => {
            console.log(errors);
          });
      };
    }
    dispatch(getGarageDatas());
  }, [dispatch]);

  if (verify === 'pending') {
    return <div className="loader"></div>;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (verify === 'authenticated') {
          return <Component {...props} />; //cuz routes cannot pass down costum props
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
