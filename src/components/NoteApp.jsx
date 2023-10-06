import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getInitialData } from "../utils/index";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import NoteArchivedList from "./NoteArchivedList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };
    this.onAddNotesEventHandler = this.onAddNotesEventHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onMoveHandler = this.onMoveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNotesEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState({search: event.target.value})
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onMoveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="max-w-5xl mx-auto shadow-xl m-5">
          <p className="font-bold text-xl text-center pt-1" id="add">
            Add Notes
          </p>
          <NoteInput addNote={this.onAddNotesEventHandler} />
        </div>

        <div className="max-w-5xl mx-auto shadow-2xl m-5">
          <p className="font-bold text-xl text-center p-3" id="active">
            Active Notes
          </p>
          <input
            type="text"
            placeholder="Cari buku"
            className="p-1 border border-black rounded-lg m-3"
            onChange={this.onSearchHandler}
          />
          <NoteList
            Notes={this.state.notes}
            search={this.state.search}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
        <div className="max-w-5xl mx-auto shadow-2xl m-5">
          <p className="font-bold text-xl text-center p-3" id="archived">
            Archived Notes
          </p>
          <NoteArchivedList
            Notes={this.state.notes}
            search={this.state.search}
            onDelete={this.onDeleteHandler}
            onMove={this.onMoveHandler}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default NoteApp;
