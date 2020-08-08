import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Shop from '../pages/Shop';
import AddPage from '../pages/AddPage';

export default function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/add" component={AddPage} />
      <Route path="/shop" component={Shop} />
    </Switch>
  )
}