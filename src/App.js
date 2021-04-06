import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import LoginSigninHeader from "./routes/LoginSigninHeader";
import ProtectedRoute from "./routes/ProtectedRoute";
import Search from "./routes/Search";
import Account from "./pages/Account";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" component={Home} exact />
        <Route path="/login" component={LoginSigninHeader} exact />
        <ProtectedRoute path="/search" component={Search} exact />
        <ProtectedRoute path="/account" component={Account} exact />
        <ProtectedRoute path="/contact" component={Contact} exact />
        <Route path="*" render={() => (<div id="notfound">NOT FOUND 404</div>)} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
