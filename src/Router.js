import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Services/Services";

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
    </Switch>
  </main>
);

export default Router;
