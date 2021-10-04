import React, {useState} from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import UserContext from "./UserContext";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";

import './App.css';
import JoblyApi from "./api.js";

function App() {
  const [currentUser,setCurrentUser] = useState(null);
  const [currentToken,setCurrentToken] = useState(null);
  const history = useHistory();

  async function userSignUp(formData) {
    // try {
      const newToken = await JoblyApi.registerUser(formData);
      setCurrentToken(newToken);
      setCurrentUser(formData.username);
    // } catch {
    //   console.log('...user not registered...')
    // }
  }

  async function userLogin(username,password) {
    // try {
      const newToken = await JoblyApi.authenticateUser(username, password);
      setCurrentToken(newToken);
      setCurrentUser(username);
      // sessionStorage.setItem("username", username);
    // } catch {
      // console.log("...user not stored in session...")
    // }
  }

  function userLogout(){
    JoblyApi.token = null;
    setCurrentToken(JoblyApi.token);
    setCurrentUser(null);
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="App">
        <BrowserRouter>
          <NavBar userLogout={userLogout}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login userLogin={userLogin} />
            </Route>
            <Route exact path="/signup">
              <Signup userSignUp={userSignUp} />
            </Route>
            <Route exact path="/profile">
              <Profile />
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
    </UserContext.Provider>
  );
}

export default App;
