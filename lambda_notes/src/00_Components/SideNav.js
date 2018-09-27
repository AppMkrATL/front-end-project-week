import React from "react";
import { Link } from "react-router-dom";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signOutHandler = () => {
    localStorage.removeItem("jwt");
  };

  render() {
    return (
      <div style={this.props.style} className="side-nav">
        <h1>Lambda Notes</h1>
        <Link to="/notes" className=" button view-notes-button">
          View Your Notes
        </Link>
        <Link to="/new" className=" button create-note-button">
          + Create New Note
        </Link>
        <Link
          to="/"
          onClick={this.signOutHandler}
          className="button sign-out-button">
          Sign Out
        </Link>
      </div>
    );
  }
}

export default SideNav;
