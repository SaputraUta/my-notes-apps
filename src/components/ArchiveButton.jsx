import React from "react";

export default function ArchiveButton({ id, onArchive }) {
  return (
    <button
      className="p-2 w-full rounded-md bg-yellow-400"
      onClick={() => onArchive(id)}
    >
      Archive
    </button>
  );
}
