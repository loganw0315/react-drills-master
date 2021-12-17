import React from "react"
import { Switch, Route } from "react-router-dom";
import Movies from "./Movies";
import Details from "./Details";

export default (
    <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/details/:id" component={Details} />
    </Switch>
)