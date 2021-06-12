import React, {Fragment} from "react";
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import NotFound from "../NotFound";
import Rules from "../Rules";
import Authors from "../Authors";
import Welcome from "../Welcome";
import NavPanel from "../NavPanel";

export default function AppView() {
        return (
            <Fragment>
                <BrowserRouter>
                    <NavPanel/>
                    <Switch>
                        <Route exact path="/" component={Welcome}/>
                        <Route path="/rules" component={Rules}/>
                        <Route path="/authors" component={Authors}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
}