import React from "react";
import NoteArchivedItem from "./NoteArchivedItem";

export default function NoteArchivedList({ Notes, onDelete, onMove, search }) {
  const archivedNotes = Notes.filter((note) => note.archived);
  const filteredNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );
  if (!filteredNotes.length) {
    return <p className="text-center p-3 pb-10">No Archived Notes</p>;
  }

  return (
    <div className="grid grid-cols-4">
      {filteredNotes.map((note) => (
        <NoteArchivedItem
          key={note.id}
          id={Notes.id}
          onDelete={onDelete}
          onMove={onMove}
          {...note}
        />
      ))}
    </div>
  );
}
