import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Home from './components/Home';
import MusArt from './components/MusArt';
import Images from './components/Images';
import OpenFair from './components/OpenFair';
import Contact from './components/Contact';

import './App.scss';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/musart' component={MusArt} />
          <Route exact path='/images' component={Images} />
          <Route exact path='/openfair' component={OpenFair} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
