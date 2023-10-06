import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ Notes, onDelete, onArchive, search }) {
  const unarchivedNotes = Notes.filter((note) => !note.archived);
  const filteredNotes = unarchivedNotes.filter((note)=> note.title.toLowerCase().includes(search.toLowerCase()));
  if (!filteredNotes.length) {
    return <p className="text-center p-3 pb-10">No Active Notes</p>;
  }

  return (
    <div className="grid grid-cols-4">
      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          id={Notes.id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}
