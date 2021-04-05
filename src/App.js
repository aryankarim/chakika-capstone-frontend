import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginSigninHeader from "./pages/LoginSigninHeader";
import ProtectedRoute from "./pages/protectedRoute";
import Searchp from "./pages/Searchp";
import Account from "./pages/Account";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <ProtectedRoute path="/" component={Home} exact />
        <Route path="/login" component={LoginSigninHeader} exact />
        
        <ProtectedRoute path="/Searchp" component={Searchp} exact />
        <Route path="*" render={() => (<div id="notfound">NOT FOUND 404</div>)} />
=======
        <Route path="/" component={LoginSigninHeader} exact />
        <Route path="/Home" component={Home} exact />
        <Route path="/Searchp" component={Searchp} exact />
        <Route path="/Account" component={Account} exact />
        <Route path="/Contact" component={Contact} exact />
>>>>>>> backup
      </Switch>
    </BrowserRouter >
  );
}

export default App;
