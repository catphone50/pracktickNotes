import { connect } from "react-redux";
import NoteItem from "../noteItem";
import styles from "./styles.module.css";

function NoteList({ noteList, noteCount }) {
  return (
    <div>
      <p className={styles.info}>U have {noteCount}</p>
      {noteList.length ? (
        noteList.map((note) => {
          return <NoteItem key={note.id} {...note} />;
        })
      ) : (
        <p>U don't have any notes</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  noteList: state.noteList,
  noteCount: state.noteCount,
});
export default connect(mapStateToProps)(NoteList);
