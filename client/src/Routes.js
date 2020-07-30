import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App';
import Create from './Create';
import Read from './Read';
import SingleRead from './SingleRead';
import UpdateData from './UpdateData';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Token from './Token';
import Expiry from './Expiry';


const Routes =()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/" exact component={App}/>
                <PrivateRoute path="/token" exact component={Token} />
                <PrivateRoute path="/create" exact component={Create}/>
                <Route path="/read" exact component={Read}/>
                <Route path="/expiry" exact component={Expiry}/>
                <Route path="/post/:slug" exact component={SingleRead}/>
                <PrivateRoute path="/post/update/:slug" exact component={UpdateData}/>
                

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;