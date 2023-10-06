import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxTitleValue: 50,
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const newTitle = event.target.value;

    if (newTitle.length <= this.state.maxTitleValue) {
      this.setState({
        title: newTitle,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form
        className="flex flex-col items-center"
        onSubmit={this.onSubmitEventHandler}
      >
        <label htmlFor="Title" className="mt-5 self-start ml-11 font-semibold">
          Notes Title
        </label>
        <input
          name="Title"
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          className="border rounded-lg p-1 w-11/12"
        />
        <p>
          Karakter tersisa: {this.state.maxTitleValue - this.state.title.length}
        </p>
        <label
          htmlFor="Description"
          className="mt-5 self-start ml-11 font-semibold "
        >
          Description
        </label>
        <textarea
          name="Description"
          placeholder="Description"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          className="border rounded-lg p-1 w-11/12 h-64"
        />
        <button
          type="submit"
          className="p-3 w-11/12 border rounded-lg mt-5 mb-5 hover:bg-gray-400"
        >
          Add
        </button>
      </form>
    );
  }
}

export default NoteInput;
