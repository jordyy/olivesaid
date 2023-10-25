import React from "react";
import "../style.css";
import { CATEGORYDATA } from "../data";

function QuotesList({ quotes, setQuotes }) {
  if (quotes.length === 0)
    return (
      <p className="message">
        Looks like Olive has no comments on this category at the moment.
      </p>
    );
  return (
    <>
      <ul className="quotes-list">
        {quotes.map((quotes) => (
          <li key={quotes.id} className="quote">
            <div className="quote-content">
              <p>"{quotes.quoteInput}"</p>
              <p className="quote-subtext">
                Olive, at the ripe old age of {quotes.age}
              </p>
            </div>
            <div className="quote-btn-collection">
              <div
                className="tag"
                style={{
                  backgroundColor: `${
                    CATEGORYDATA.find(
                      (category) => category.name === quotes.category
                    ).color
                  }`,
                }}
              >
                {quotes.category}
              </div>
              <div className="reaction-buttons">
                <button>😂 {quotes.reactionFunny}</button>
                <button>🥰 {quotes.reactionLove}</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default QuotesList;
