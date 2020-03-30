import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import RoutesArray from './RoutesArray';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {
                    RoutesArray.map((prop, key) => {
                        if (prop.redirect)
                            return <Redirect from={prop.path} to={prop.to} key={key} />
                        else return (
                            <Route
                                path={prop.path}
                                key={key}
                                exact={true}
                                render={(props) => <prop.component  {...props} />}
                            />
                        );
                    })
                }
            </Switch>
        </BrowserRouter>
    );
}