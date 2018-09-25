import React, { Component } from "react";
import { Route } from "react-router-dom";
import NotesListView from "./Components/NotesListView";
import CreateNoteView from "./Components/CreateNoteView";
import IndividualNoteView from "./Components/IndividualNoteView";
import EditNoteView from "./Components/EditNoteView";
import "./App.css";
import WelcomeScreen from "./Components/WelcomeScreen";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="routes">
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/notes" component={NotesListView} />
          <Route path="/new" component={CreateNoteView} />
          <Route path="/notes/:id/edit" component={EditNoteView} />
          <Route exact path="/notes/:id" component={IndividualNoteView} />
        </div>
      </div>
    );
  }
}

export default App;
