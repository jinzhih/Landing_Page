import React, { Fragment } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import HomeThree from '../pages/HomeThree';

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeThree} />
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;
