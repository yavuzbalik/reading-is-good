/* eslint-disable */
import React from 'react';
import { withRouter, Switch, BrowserRouter, Route, Router } from 'react-router-dom';
import Favicon from 'react-favicon';
import { Helmet } from 'react-helmet';
import ApplicationContainer from '../container/applicationContainer';
import '../styles/applicationStyles.scss'
import { history } from '../../../history'

// Components
// import { Loader } from '../../../components';
import SiteRoute from '../../../config/routes/siteRoute'


const ApplicationView = () => (
  <ApplicationContainer>
    {({ routes, isLoading }) => (
      <div className="main">
        <Favicon url="https://www2.deloitte.com/content/dam/resources/deloitte/icons/favicon.ico" />
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <title>Deloitte</title>
        </Helmet>
        <Router history={history}>
          <Switch>
              {Object.keys(routes).map(key => {
                let route =  routes[key]
                return (
                  <SiteRoute
                    key={route.key}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    layout={route.layout}
                    privateRoute={route.privateRoute}
                    />
                );
              })}
          </Switch>
          </Router>
      </div>
    )}
  </ApplicationContainer>
);

export default ApplicationView;
