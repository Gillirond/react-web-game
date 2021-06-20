import React, {createContext} from "react";
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import NotFound from "../NotFound";
import Rules from "../Rules";
import Authors from "../Authors";
import Welcome from "../Welcome";
import NavPanel from "../NavPanel";

export const GameNameContext = createContext()

export default function AppView() {
    return (
        <GameNameContext.Provider value='Truth or Dare'>
            <BrowserRouter>
                <NavPanel/>
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/rules" component={Rules}/>
                    <Route path="/authors" component={Authors}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </GameNameContext.Provider>
    )
}