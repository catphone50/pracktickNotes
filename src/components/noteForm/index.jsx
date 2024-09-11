import { useState } from "react";
import styles from "./styles.module.css";
import { addNote } from "../../redux/actions/actionsNote";
import { connect } from "react-redux";

function NoteForm({ addNoteToList }) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote({
      ...note,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    addNoteToList({
      ...note,
      id: Math.random(),
      date: new Date().getTime().toString(),
    });

    setNote({ title: "", content: "" });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <input
        onChange={handleChange}
        value={note.title}
        type="text"
        name="title"
        required
        placeholder="Title"
      />
      <textarea
        onChange={handleChange}
        value={note.content}
        name="content"
        required
        placeholder="Content ..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNoteToList: (noteData) => dispatch(addNote(noteData)),
  };
};

export default connect(null, mapDispatchToProps)(NoteForm);
