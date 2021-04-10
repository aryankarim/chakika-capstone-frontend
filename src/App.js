import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import LoginSigninHeader from "./routes/LoginSigninHeader";
import ProtectedRoute from "./routes/ProtectedRoute";
import Search from "./routes/Search";
import Account from "./routes/Account";
import Contact from "./routes/Contact";
import Garage from "./routes/Garage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" component={Home} exact />
        <Route path="/login" component={LoginSigninHeader} exact />
        <ProtectedRoute path="/search" component={Search} exact />
        <ProtectedRoute path="/account" component={Account} exact />
        <ProtectedRoute path="/contact" component={Contact} exact />
        <ProtectedRoute path="/garage" component={Garage} exact />
        <Route path="*" render={() => (<div id="notfound">NOT FOUND 404</div>)} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
