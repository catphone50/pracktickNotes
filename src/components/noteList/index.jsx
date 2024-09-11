import { connect } from "react-redux";
import NoteItem from "../noteItem";

function NoteList({ noteList }) {
  return (
    <div>
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
});
export default connect(mapStateToProps)(NoteList);
