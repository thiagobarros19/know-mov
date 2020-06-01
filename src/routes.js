import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={MovieDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;