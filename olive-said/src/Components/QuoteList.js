import React from "react";
import "../style.css";
import QuoteEntry from "./QuoteEntry";

export default function QuoteList({ quotes, setQuotes }) {
  if (quotes.length === 0)
    return (
      <p className="message">
        Looks like Olive has no comments on this category at the moment.
      </p>
    );
  return (
    <section>
      <ul className="quotes-list">
        {quotes.map((quote) => (
          <QuoteEntry key={quote.id} quotes={quotes} setQuotes={setQuotes} />
        ))}
      </ul>
    </section>
  );
}
