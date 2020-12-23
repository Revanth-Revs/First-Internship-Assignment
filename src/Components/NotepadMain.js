/** @format */

import React, { useState } from "react";
import "../CSS/NotepadMain.css";

import EditSharpIcon from "@material-ui/icons/EditSharp";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";

export default function NotepadMain() {
  const [notes, setNotes] = useState([
    { key: 1, title: "title", desc: "Lorem ipsum dolor sit am..." },
    { key: 2, title: "title", desc: "Lorem ipsum dolor sit am..." },
    { key: 3, title: "title", desc: "Lorem ipsum dolor sit am..." },
  ]);

  const [showInput, setShowInput] = useState(false);
  const [newNote, setNewNote] = useState("");

  const addNote = (initialVal) => {
    setNewNote(initialVal ? initialVal : "");
    setShowInput(!showInput);
  };

  const handleChange = (e) => {
    if (e.code === "Enter") {
      addNew();
    }
    setNewNote(e.target.value);
  };
  const addNew = () => {
    if (newNote) {
      const newTitle =
        newNote.indexOf(" ") !== -1
          ? newNote.substring(0, newNote.indexOf(" "))
          : newNote;
      const createdNoted = {
        title: newTitle,
        desc: newNote,
        key: Math.random(),
      };
      setNotes([createdNoted, ...notes]);
      setShowInput(false);
    }
  };

  const deleteNote = (key) => {
    const updatedNote = notes.filter((n) => n.key !== key);
    setNotes(updatedNote);
  };

  const editNote = (item) => {
    deleteNote(item.key);
    addNote(item.title + " " + item.desc);
  };

  return (
    <div className="notepad-wrapper">
      <div className="notepad-heading">Notepad</div>

      <div className="notepad-content">
        {showInput ? (
          <div className="note-input">
            <input
              autoFocus={true}
              value={newNote}
              placeholder="Add notes..( title <space> desc )"
              onChange={(e) => handleChange(e)}
              onBlur={() => addNew()}
              onKeyPress={(e) => handleChange(e)}
            />
          </div>
        ) : (
          ""
        )}
        {notes
          ? notes.map((item) => (
              <div className="note-item">
                <div className="note-text">
                  {item.title}
                  <span className="desc">{item.desc}</span>
                </div>
                <div className="note-icons">
                  <div onClick={() => editNote(item)}>
                    <EditSharpIcon
                      style={{
                        fontSize: "15px",
                        color: "#9D9D9D",
                        cursor: "pointer",
                        paddingRight: "5px",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                  <div onClick={() => deleteNote(item.key)}>
                    <DeleteForeverSharpIcon
                      style={{
                        fontSize: "15px",
                        color: "#9D9D9D",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>

      <div className="add-btn" onClick={() => addNote()}>
        <p className="add-btn-icon">+</p>
      </div>
    </div>
  );
}
