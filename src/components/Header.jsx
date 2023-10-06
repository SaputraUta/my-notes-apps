import React from "react";

export default function Header() {
  return (
    <header className="bg-teal-400 flex justify-between">
      <div className="m-5">
        <p className="font-bold text-2xl">My Notes</p>
      </div>
      <nav className="m-5">
        <ul className="flex gap-4 pt-1">
            <li className="hover:underline"><a href="#add">Add Notes</a></li>
            <li className="hover:underline"><a href="#active">Active Notes</a></li>
            <li className="hover:underline"><a href="#archived">Archived Notes</a></li>
        </ul>
      </nav>
    </header>
  );
}
