import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  const [selectedNote, setSelectedNote] = useState(null);

  const fetchNotes = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>Notes Management System</h1>

      <NoteForm
        fetchNotes={fetchNotes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />

      <NoteList
        setSelectedNote={setSelectedNote}
      />
    </div>
  );
}

export default App;