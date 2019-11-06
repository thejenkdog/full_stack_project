import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { createNote, updateNote, deleteNote } from '../actions/note_actions';

const mapStateToProps = state => ({
  post: { title: "",
          body: "",
          author_id: state.session.id,
          pinned: false,
          color: "",
          img_url: "",
          reminder: "",
          archived: false
        }
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
