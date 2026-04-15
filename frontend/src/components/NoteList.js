import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteItem from "./NoteItem";
import SearchBar from "./SearchBar";

function NoteList({ setSelectedNote }) {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("https://notes-backend-agm0.onrender.com/api/notes");

      const sortedNotes = res.data.sort((a, b) => {
        return b.pinned - a.pinned;
      });

      setNotes(sortedNotes);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`https://notes-backend-agm0.onrender.com/api/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h2>All Notes</h2>

      <SearchBar setNotes={setNotes} />

      {notes.map((note) => (
        <NoteItem
          key={note._id}
          note={note}
          deleteNote={deleteNote}
          setSelectedNote={setSelectedNote}
          fetchNotes={fetchNotes}
        />
      ))}
    </div>
  );
}

export default NoteList;