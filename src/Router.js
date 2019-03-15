import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

const Router = () => (
  <main>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </main>
);

export default Router;
