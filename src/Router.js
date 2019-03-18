import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about-us" component={AboutUs} />
    </Switch>
  </main>
);

export default Router;
