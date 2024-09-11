import { deleteNote } from "../../redux/actions/actionsNote";
import styles from "./styles.module.css";
import { connect } from "react-redux";

function NoteItem({ id, title, content, deleteNoteFromList }) {
  return (
    <div className={styles.item_container}>
      <h3 className={styles.item_header}>{title}</h3>
      <p className={styles.item}>{content}</p>
      <button className={styles.edit_btn}>Edit</button>
      <button
        className={styles.delete_btn}
        onClick={() => deleteNoteFromList(id)}
      >
        Delete
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNoteFromList: (id) => dispatch(deleteNote(id)),
  };
};

export default connect(null, mapDispatchToProps)(NoteItem);
