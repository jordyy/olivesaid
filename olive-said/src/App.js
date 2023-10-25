import React from "react";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import QuotesList from "./Components/QuotesList";
import "./style.css";
import supabase from "./supabase";
import Loader from "./Components/Loader";

export default function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentCategory, setCurrentCategory] = React.useState("all");

  React.useEffect(() => {
    async function getQuotes() {
      setIsLoading(true);

      let query = supabase.from("quotes").select("*");

      if (currentCategory !== "all")
        query = query.eq("category", `${currentCategory}`);

      const { data: quotes, error } = await query.limit(100);

      if (!error) setQuotes(quotes);
      else
        alert(
          "Olive can't remember what she said right now. Please try again."
        );
      setIsLoading(false);
    }
    getQuotes();
  }, [currentCategory]);

  return (
    <>
      <div className="container">
        <Header setQuotes={setQuotes} />
        <main className="main">
          <Categories setCurrentCategory={setCurrentCategory} />

          {isLoading ? (
            <Loader />
          ) : (
            <QuotesList quotes={quotes} setQuotes={setQuotes} />
          )}
        </main>
      </div>
    </>
  );
}
