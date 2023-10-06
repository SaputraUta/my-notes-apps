import React from "react";

export default function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="p-2 w-full border rounded-md mt-1 bg-red-500"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  );
}
