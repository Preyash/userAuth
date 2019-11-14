import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };
  change(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  submit(event) {
    const { email, password } = this.state;
    event.preventDefault();
    if ((email==="" && password==="") || (email==="") || (password==="")) {
      alert("Fill all thses fields");
    } else if(email==="preyash.hojiwala@gmail.com" && password==="1234"){
      alert("Welcome admin");
    } else {
      document.form.reset()
      let original = window.location.href.replace("/login", "");
      window.location.href = original + "/dashboard";
      localStorage.setItem("userIsLoggedIn", "true");
    }
  }
  render() {
    return localStorage.userIsLoggedIn === "false" ? (
      <form name="form" onSubmit={this.submit.bind(this)}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={this.change.bind(this)}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={this.change.bind(this)}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    ) : (
      <p>Content Not Found</p>
    );
  }
}
