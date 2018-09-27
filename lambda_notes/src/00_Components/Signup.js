import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
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
    const userSignup = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://localhost:8000/api_v1/register", userSignup)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem("jwt", token);
        this.props.history.push("/api_v1/notes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div onSubmit={this.onSubmitHandler} className="login-page">
        <h1>Sign Up</h1>
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
          <button type="submit">Sign Up!</button>
        </form>
        <p>
          Already have an account? Login <Link to="/api_v1/login"> here </Link>
        </p>
      </div>
    );
  }
}

export default SignUp;
