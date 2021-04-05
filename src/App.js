import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginSigninHeader from "./pages/LoginSigninHeader";
import Searchp from "./pages/Searchp";
import Account from "./pages/Account";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginSigninHeader} exact />
        <Route path="/Home" component={Home} exact />
        <Route path="/Searchp" component={Searchp} exact />
        <Route path="/Account" component={Account} exact />
        <Route path="/Contact" component={Contact} exact />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
