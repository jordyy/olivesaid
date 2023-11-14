import React from "react";
import "../style.css";
import { CATEGORYDATA } from "../data";
import supabase from "../supabase";

function QuotesList({ quotes, setQuotes }) {
  const [isUpdating, setIsUpdating] = React.useState(false);

  async function handleReaction({ columnName, quoteId, currentReactionCount }) {
    setIsUpdating(true);
    const { data: updatedQuote, error } = await supabase
      .from("quotes")
      .update({ [columnName]: (currentReactionCount ?? 0) + 1 })
      .eq("id", quoteId)
      .select();
    setIsUpdating(false);

    if (!error)
      setQuotes((quotes) =>
        quotes.map((q) => (q.id === quoteId ? updatedQuote[0] : q))
      );
  }

  if (quotes.length === 0)
    return (
      <p className="message">
        Looks like Olive has no comments on this category at the moment.
      </p>
    );
  return (
    <>
      <ul className="quotes-list">
        {quotes.map((quote) => (
          <li key={quote.id} className="quote">
            <div className="quote-content">
              <p>"{quote.quoteInput}"</p>
              <p className="quote-subtext">
                Olive, at the ripe old age of {quote.age}
              </p>
            </div>
            <div className="quote-btn-collection">
              <div
                className="tag"
                style={{
                  backgroundColor: `${
                    CATEGORYDATA.find(
                      (category) => category.name === quote.category
                    ).color
                  }`,
                }}
              >
                {quote.category}
              </div>

              <div className="reaction-buttons">
                <button
                  onClick={() =>
                    handleReaction({
                      columnName: "reactionFunny",
                      quoteId: quote.id,
                      currentReactionCount: quote.reactionFunny,
                    })
                  }
                  disabled={isUpdating}
                >
                  😂 {quote.reactionFunny}
                </button>
                <button
                  onClick={() =>
                    handleReaction({
                      columnName: "reactionLove",
                      quoteId: quote.id,
                      currentReactionCount: quote.reactionLove,
                    })
                  }
                  disabled={isUpdating}
                >
                  🥰 {quote.reactionLove}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default QuotesList;
