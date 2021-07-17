import React from "react";
import { HashRouter, Switch, Route} from "react-router-dom"
import App from "./App";
import Page from "./Shopping-page";
import End from "./End"

const Routes = () => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/page" component={Page} />
                <Route exact path="/end" component={End} />
            </Switch>
        </HashRouter>
    )
}

export default Routes