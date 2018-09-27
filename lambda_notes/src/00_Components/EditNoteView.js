import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import SideNav from "./SideNav";

class EditNoteView extends React.Component {
  constructor() {
    super();
    this.state = {
      note: [],
      title: "",
      content: ""
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
          note: note.data,
          title: note.data[0].Title,
          content: note.data[0].Content
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitNoteHandler = event => {
    const id = parseInt(this.props.match.params.id);
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };
    const newNote = {
      title: this.state.title,
      content: this.state.content
    };
    axios
      .put(`http://localhost:9000/api/notes/${id}`, newNote, requestOptions)
      .then(response => {
        this.props.history.push("/notes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="edit-note">
        <div className="flex-app">
          <SideNav />
          <div className="content">
            <FormGroup>
              <h2>Edit Note:</h2>
              <div className="form">
                <FormControl
                  className="form-data"
                  name="title"
                  onChange={this.handleChangeHandler}
                  value={this.state.title}
                  type="text"
                  placeholder="Note Title"
                />
                <FormControl
                  className="form-data"
                  onChange={this.handleChangeHandler}
                  value={this.state.content}
                  name="content"
                  componentClass="textarea"
                  rows="15"
                  placeholder="Note Content"
                />
              </div>
              <button className="button" onClick={this.submitNoteHandler}>
                Save
              </button>
            </FormGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default EditNoteView;
