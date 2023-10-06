import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import MoveButton from "./MoveButton";
import DeleteButton from "./DeleteButton";

export default function NoteItem({ id, title, body, createdAt, onDelete, onMove }) {
  return (
    <div className="flex flex-col justify-between shadow-lg m-2 p-2">
      <NoteHeader title={title} createdAt={createdAt} />
      <NoteBody body={body} />
      <div className="">
        <MoveButton id={id} onMove={onMove}/>
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}
