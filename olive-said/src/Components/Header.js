import React from "react";
import "../style.css";

export default function header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="80" width="80" alt="single green olive" />
        <h1>Olive said...</h1>
      </div>
      <button className="btn btn-large">What did she say?</button>
    </header>
  );
}
