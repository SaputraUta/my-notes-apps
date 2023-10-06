import React from "react";

export default function MoveButton({id, onMove}) {
  return <button className="p-2 w-full rounded-md bg-yellow-400" onClick={()=> onMove(id)}>Move</button>;
}
