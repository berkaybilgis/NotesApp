import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredNotes } from "../redux/notes/notesSlice";

function NoteList() {
  const filteredNotes = useSelector(selectFilteredNotes);
  return (
    <>
      <div className="noteContainer">
        <ul className="list">
          {filteredNotes.map((note) => (
            <li key={note.id} className={`list-item-${note.color}`}>
              <label>{note.text}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NoteList;
