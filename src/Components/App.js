import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoutes from '../Containers/PrivateRoutes';
import Login from './Login';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path={['/users/login', '/users/sign-up']} component={Login} />
          <PrivateRoutes />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
