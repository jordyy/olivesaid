import React from "react";
import "../style.css";

export default function Form() {
  return (
    <form className="quote-form">
      <input type="text" placeholder="Today Olive said..." />
      <input type="number" />
      <select className="category-selector">
        <option value="">Choose category</option>
        <option value="holidays">Holidays</option>
      </select>
    </form>
  );
}
