import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {

  const token = window.localStorage.getItem('adminToken');
  return (
    <Route
      {...rest}
      render={props => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/admin' />;
        }
      }}
    />
  );
};

export default PrivateRoute;