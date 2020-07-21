import React from "react";
import { Redirect, Route } from "react-router-dom";


export function HORoute ({ component: Component, isLoggedIn, ...rest }) {

    return (
        <Route
            {...rest}
            render={props => (
                isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
            )}
         />
    )
}
