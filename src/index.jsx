import React from "react";
import "./styles/index.css";
import { createRoot } from 'react-dom/client';
import Content from "./components/NoteApp";
import NoteApp from "./components/NoteApp";

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);
