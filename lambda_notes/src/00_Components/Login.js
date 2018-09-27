import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  onInputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const userLogin = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://localhost:8000/api_v1/login", userLogin)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem("jwt", token);
        this.props.history.push("/notes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div onSubmit={this.onSubmitHandler} className="login-page">
        <h1>Login</h1>
        <form>
          <input
            type="text"
            placeholder="Username"
            onChange={this.onInputChangeHandler}
            value={this.state.username}
            name="username"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={this.onInputChangeHandler}
            value={this.state.password}
            name="password"
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? Sign up <Link to="/signup"> here </Link>
        </p>
      </div>
    );
  }
}

export default Login;
