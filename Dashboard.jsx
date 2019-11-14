import React, { Component } from "react";
import TransitionsModal from "./Modal.jsx";

export default class Dashboard extends Component {
  state = {
    a: "hello"
  };
  signout() {
    let original = window.location.href.replace("/dashboard", "");
    window.location.href = original + "/login";
    localStorage.setItem("userIsLoggedIn", "false");
  }
  render() {
    return localStorage.userIsLoggedIn === "true" ? (
      <>
        <button onClick={this.signout.bind(this)}>SignOut</button>
        <hr />
        <div className="fullWidth">
          <div className="halfWidth">
            <p>Groups</p>
          </div>
          <div className="halfWidth">
            <div className="header">
              <dt style={{ fontSize: "20px" }}>Members</dt>
              <img
                src="https://freeiconshop.com/wp-content/uploads/edd/plus-outline.png"
                style={{ width: "8%" }}
                alt="add"
                onClick={this.addNew.bind(this)}
              />
            </div>
            <div className="hr"></div>
          </div>
        </div>
      </>
    ) : (
      <p>Content Not Found</p>
    );
  }
}
