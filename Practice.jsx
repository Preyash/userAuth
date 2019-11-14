import React, { Component } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import LoginPage from './LoginPage.jsx'
import Dashboard from './Dashboard.jsx'

export default class Practice extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/login" component={LoginPage}  />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    );
  }
}
