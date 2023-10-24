import React from "react";
import "../style.css";
import Form from "./Form";

export default function Header() {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="80" width="80" alt="single green olive" />
        <h1>Olive said...</h1>
      </div>
      <button
        className="btn btn-large"
        onClick={() => setShowForm((show) => !show)}
      >
        What did she say?
      </button>
      {showForm ? <Form /> : null}
    </header>
  );
}
