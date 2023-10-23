import React from "react";
import "../style.css";
import CATEGORIES from "../App/src/data.js";

export default function Quotes() {
  const quotes = quotesData;

  return (
    <>
      <section>
        <ul>
          {quotes.map((quote) => (
            <>
              <span
                className="quote"
                style={{
                  backgroundColor: CATEGORIES.find(
                    (cat) => cat.name === quote.category
                  ).color,
                }}
              >
                {quote.category}
              </span>
              <div className="reaction-buttons">
                <button>{quote.reaction}</button>
              </div>
            </>
          ))}
        </ul>
      </section>
    </>
  );
}
