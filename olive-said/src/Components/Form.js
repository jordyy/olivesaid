import React from "react";
import "../style.css";
import { CATEGORYDATA } from "../data";

export default function Form({ showForm, setShowForm, setQuotes }) {
  const [quoteInput, setQuoteInput] = React.useState("");
  const [age, setAge] = React.useState("");
  const [category, setCategory] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (quoteInput && age && category) {
      const newQuote = {
        id: Math.round(Math.random() * 10000),
        created_at: new Date().getFullYear(),
        quoteInput,
        category,
        reactionFunny: 0,
        reactionLove: 0,
        age,
      };

      setQuotes((quotes) => [newQuote, ...quotes]);
    }

    setShowForm(!showForm);
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={quoteInput}
        placeholder="Today Olive said..."
        onChange={(e) => setQuoteInput(e.target.value)}
      />
      <input
        type="number"
        value={age}
        className="number-input"
        placeholder="Olive's age when quoted?"
        onChange={(e) => setAge(e.target.value)}
      />
      <select
        value={category}
        className="category-selector"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Choose category</option>
        {CATEGORYDATA.map((category) => (
          <option value="{category.name}">{category.name.toUpperCase()}</option>
        ))}
      </select>
      <button className="btn form-btn">SUBMIT</button>
    </form>
  );
}
