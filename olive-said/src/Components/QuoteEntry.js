import React from "react";
import "../style.css";
import { CATEGORIES } from "../data";

function Quote({ quote }) {
  // const quotes = quotesData;

  return (
    <>
      {/* {quotes.map((quote) => (
        <>
          <li className="quote">
            <p>
              "{quote.text}," said Olive, at the ripe old age of{" "}
              {quote.age}
            </p>
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
          </li>
        </>
      ))} */}
    </>
  );
}

export default Quote;
