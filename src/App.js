import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginSigninHeader from "./pages/LoginSigninHeader";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginSigninHeader} exact />
        <Route path="/Home" component={Home} exact />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
