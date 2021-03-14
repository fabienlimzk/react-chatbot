import React from "react";
import "./style.css";
import Chat from "./Chat"

export default function App() {
  return (
    <div className="mainSection">
      <div className="heading">
        Chatbot POC
      </div>
      <Chat />
    </div>
  );
}
