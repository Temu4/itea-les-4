import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import rootRoute from "./rootRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  activeStyle={{ fontWeight: "bold", color: "blue" }}
                  to='/page/homePage'
                >
                  HomePage
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ fontWeight: "bold", color: "blue" }}
                  to='/list'
                >
                  List
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ fontWeight: "bold", color: "blue" }}
                  to='/page/contacts'
                >
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ fontWeight: "bold", color: "blue" }}
                  to='/page/about'
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {rootRoute.map((route, index) => (
            <Route
              id={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
