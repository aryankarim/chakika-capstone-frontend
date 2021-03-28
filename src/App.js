import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginSigninHeader from "./pages/LoginSigninHeader";
import Searchp from "./pages/Searchp";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginSigninHeader} exact />
        <Route path="/Home" component={Home} exact />
        <Route path="/Searchp" component={Searchp} exact />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
