import React from "react";
import "../style.css";
import { CATEGORYDATA } from "../data";
import supabase from "../supabase";

export default function Form({ showForm, setShowForm, setQuotes }) {
  const [quoteInput, setQuoteInput] = React.useState("");
  const [age, setAge] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [isUploading, setIsUploading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (quoteInput && age && category) {
      setIsUploading(true);
      const { data: newQuote, error } = await supabase
        .from("quotes")
        .insert([
          {
            quoteInput,
            category,
            age,
          },
        ])
        .select();
      setIsUploading(false);

      if (!error) setQuotes((quotes) => [newQuote[0], ...quotes]);
      console.log(newQuote);
    }

    setQuoteInput("");
    setAge("");
    setCategory("");

    setShowForm(!showForm);
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={quoteInput}
        placeholder="Today Olive said..."
        onChange={(e) => setQuoteInput(e.target.value)}
        disabled={isUploading}
      />
      <input
        type="number"
        value={age}
        className="number-input"
        placeholder="Olive's age when quoted?"
        onChange={(e) => setAge(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        className="category-selector"
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category</option>
        {CATEGORYDATA.map((category) => (
          <option value={category.name}>{category.name.toUpperCase()}</option>
        ))}
      </select>
      <button className="btn form-btn" disabled={isUploading}>
        SUBMIT
      </button>
    </form>
  );
}
