import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginSigninHeader from "./pages/LoginSigninHeader";
import ProtectedRoute from "./pages/protectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginSigninHeader} exact />
        <ProtectedRoute path="/home" component={Home} exact />
        <Route path="*" render={() => "NOT FOUND 404"} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
