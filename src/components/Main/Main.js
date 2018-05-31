import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Category from '../Category/Category';

const Main = props => {
  return (
    <main className="page_content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:name" component={Category} />
      </Switch>
    </main>
  );
};

export default Main;
