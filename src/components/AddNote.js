import { useState } from "react";
import { addNote } from "../redux/notes/notesSlice";
import { useDispatch } from "react-redux";
import "../index.css";

function AddNote() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.length > 0) {
      dispatch(addNote({ text, color }));
      setText("");
      setColor("");
    }
  };

  return (
    <div>
      {/* Note Area */}

      <textarea
        className="textArea"
        rows={2}
        cols={10}
        placeholder="Enter your note here..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      {/* ADD BUTTON */}

      <button className="addBtn" onClick={() => handleSubmit()}>
        ADD
      </button>

      {/* Color Buttons */}

      <div className="divColorBtns">
        <button className="colorBtn-P" onClick={() => setColor("P")}></button>
        <button className="colorBtn-Pr" onClick={() => setColor("Pr")}></button>
        <button className="colorBtn-Y" onClick={() => setColor("Y")}></button>
        <button className="colorBtn-T" onClick={() => setColor("T")}></button>
        <button className="colorBtn-G" onClick={() => setColor("G")}></button>
      </div>
    </div>
  );
}

export default AddNote;
