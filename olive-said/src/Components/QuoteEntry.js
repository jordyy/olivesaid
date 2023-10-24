import React from "react";
import "../style.css";
import { CATEGORYDATA } from "../data";

function QuoteEntry({ quotes }) {
  return (
    <>
      {quotes.map((quotes) => (
        <>
          <li className="quote">
            <p>
              "{quotes.text}"<p>Olive, at the ripe old age of {quotes.age}</p>
            </p>
            <span
              className="category"
              style={{
                backgroundColor: CATEGORYDATA.find(
                  (category) => category.name === quotes.category
                ).color,
              }}
            >
              {quotes.category}
            </span>
            <div className="reaction-buttons">
              <button>😂 {quotes.reactionFunny}</button>
              <button>🥰 {quotes.reactionLove}</button>
            </div>
          </li>
        </>
      ))}
    </>
  );
}

export default QuoteEntry;
