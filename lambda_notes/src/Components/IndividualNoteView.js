import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SideNav from "./SideNav";

class IndividualNoteView extends Component {
  constructor() {
    super();
    this.state = {
      currentNote: [],
      showModal: false
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };
    const id = parseInt(this.props.match.params.id);
    axios
      .get(`http://localhost:9000/api/notes/${id}`, requestOptions)
      .then(note => {
        this.setState({
          currentNote: note.data[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  showModalHandler = () => {
    this.setState({
      showModal: true
    });
  };

  cancelDeleteHandler = () => {
    this.setState({
      showModal: false
    });
  };

  deleteNoteHandler = () => {
    const id = parseInt(this.props.match.params.id);
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };
    axios
      .delete(`http://localhost:9000/api/notes/${id}`, requestOptions)
      .then(res => {
        this.props.history.push("/notes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let modalShowStyle;
    if (this.state.showModal) {
      modalShowStyle = {
        display: "block",
        backgroundColor: "white",
        border: "1px solid black",
        margin: "300px",
        marginTop: "200px",
        textAlign: "center",
        padding: "30px",
        fontWeight: "bold"
      };
    } else {
      modalShowStyle = {
        display: "none"
      };
    }

    return (
      <div key={this.state.currentNote.id} className="note-individual">
        <div className="flex-app">
          <SideNav />
          <div className="content">
            <div style={modalShowStyle} className="modal">
              <p> Are you sure you want to delete this? </p>
              <div className="modal-buttons">
                <div className="delete" onClick={this.deleteNoteHandler}>
                  Delete
                </div>
                <div className="cancel" onClick={this.cancelDeleteHandler}>
                  No
                </div>
              </div>
            </div>
            <div className="buttons">
              <div className="delete-button" onClick={this.showModalHandler}>
                Delete
              </div>
              <Link
                to={`/notes/${this.state.currentNote.id}/edit`}
                className="edit-button"
              >
                Edit
              </Link>
            </div>
            <h2 className="individual-note-title">
              {this.state.currentNote.Title}
            </h2>
            <p>{this.state.currentNote.Content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default IndividualNoteView;
