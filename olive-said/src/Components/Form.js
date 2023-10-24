import React from "react";
import "../style.css";
import { CATEGORYDATA } from "../data";

export default function Form() {
  const [quoteInput, setQuoteInput] = React.useState("");
  const [age, setAge] = React.useState("");
  const [category, setCategory] = React.useState("");

  return (
    <form className="quote-form">
      <input
        type="text"
        value={quoteInput}
        placeholder="Today Olive said..."
        onChange={(e) => setQuoteInput(handleQuoteInput)}
      />
      <input
        type="number"
        value={age}
        className="number-input"
        placeholder="Olive's age when quoted?"
        onChange={(e) => setAge(e.target.value)}
      />
      <select className="category-selector">
        <option value="">Choose category</option>
        {CATEGORYDATA.map((category) => (
          <option value="{category.name}">{category.name.toUpperCase()}</option>
        ))}
      </select>
    </form>
  );
}
