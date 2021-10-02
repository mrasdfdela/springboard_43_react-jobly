import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import './App.css';

function App() {
  // const user = { }
  const user={ username: "jerryhsu", firstName:"Jerry", lastName:"Hsu", email:"jerryhsu830@gmail.com" }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <Profile user={user}/>
          </Route>
          <Route exact path="/companies">
            <Companies />
          </Route>
          <Route exact path="/companies/:handle">
            <Company />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
