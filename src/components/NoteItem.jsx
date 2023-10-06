import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

export default function NoteItem({ id, title, body, createdAt, onDelete, onArchive }) {
  return (
    <div className="flex flex-col justify-between shadow-lg m-2 p-2">
      <NoteHeader title={title} createdAt={createdAt} />
      <NoteBody body={body} />
      <div className="">
        <ArchiveButton id={id} onArchive={onArchive} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}
