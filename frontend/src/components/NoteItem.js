// deployment change
import React from "react";
import axios from "axios";

function NoteItem({ note, deleteNote, setSelectedNote, fetchNotes }) {

  const togglePin = async () => {
    try {
      await axios.put(`https://notes-backend-agm0.onrender.com/api/notes/${note._id}`, {
        ...note,
        pinned: !note.pinned
      });

      fetchNotes();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`note ${note.pinned ? "pinned" : ""}`}>

      {note.pinned && (
        <div style={{ color: "#f39c12", fontWeight: "bold" }}>
          📌 Pinned
        </div>
      )}

      <h3>{note.title}</h3>

      <p>{note.content}</p>

      {note.tags && (
        <div className="tag">
          {note.tags}
        </div>
      )}

      <p>
        <small>
          Created: {new Date(note.createdAt).toLocaleString()}
        </small>
      </p>

      <p>
        <small>
          Updated: {new Date(note.updatedAt).toLocaleString()}
        </small>
      </p>

      <button onClick={() => setSelectedNote(note)}>
        Edit
      </button>

      <button onClick={() => deleteNote(note._id)}>
        Delete
      </button>

      <button onClick={togglePin}>
        {note.pinned ? "Unpin" : "Pin"}
      </button>

    </div>
  );
}

export default NoteItem;