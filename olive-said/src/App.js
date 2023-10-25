import React from "react";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import QuotesList from "./Components/QuotesList";
import "./style.css";
import supabase from "./supabase";

export default function App() {
  const [quotes, setQuotes] = React.useState([]);

  React.useEffect(() => {
    async function getQuotes() {
      const { data: quotes, error } = await supabase.from("quotes").select("*");
      setQuotes(quotes);
    }
    getQuotes();
  }, []);

  return (
    <>
      <div className="container">
        <Header setQuotes={setQuotes} />
        <main className="main">
          <Categories />
          <QuotesList quotes={quotes} setQuotes={setQuotes} />
        </main>
      </div>
    </>
  );
}
