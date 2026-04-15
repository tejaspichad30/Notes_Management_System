import React, { useState, useEffect } from "react";
import axios from "axios";

function NoteForm({ fetchNotes, selectedNote, setSelectedNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title || "");
      setContent(selectedNote.content || "");
      setTags(selectedNote.tags || "");
    }
  }, [selectedNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedNote) {
        await axios.put(
          `https://notes-backend-agm0.onrender.com/api/notes/${selectedNote._id}`,
          { title, content, tags }
        );
      } else {
        await axios.post("https://notes-backend-agm0.onrender.com/api/notes", {
          title,
          content,
          tags
        });
      }

      setTitle("");
      setContent("");
      setTags("");
      setSelectedNote(null);
      fetchNotes();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Note</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        {selectedNote ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default NoteForm;