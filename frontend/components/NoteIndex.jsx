
import React from 'react';
import NoteIndexItem from './NoteIndexItem';

class NoteIndex extends React.Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
   
    const { notes, openModal, receiveCurrentNoteId } = this.props;
    
    return (
      <div className="note-index">
        <ul className="note-index-ul">
          {notes.map(note => 
            <NoteIndexItem 
              key={note.id}
              note={note}
              receiveCurrentNoteId={receiveCurrentNoteId}
              openModal={openModal} />) }
        </ul>
      </div>
    )
  }
}

export default NoteIndex;
