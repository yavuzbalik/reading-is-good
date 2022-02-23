/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


 const SiteRoute = ({ component, layout, privateRoute, path,exact,key,  ...rest}) => {

    const Layout = layout;
    const Component = component;

    const token = localStorage.getItem('userToken');
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) => {
          if ((token && privateRoute) || (!token && (path === '/login' || path === '/register'))) {
            return (
              <Layout>
                <Component {...props} />
              </Layout>
            );
          }

          if (token && (path === '/login' || path === '/register')) {
            return <Redirect exact to={{ pathname: '/home' }} />;
          }
          return <Redirect exact to={{ pathname: '/login' }} />;
        }}
      />
    );
} 

SiteRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
  privateRoute: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

export default SiteRoute;