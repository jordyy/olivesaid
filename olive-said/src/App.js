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
  // const [currentCategory, setCurrentCategory] = React.useState("all");

  React.useEffect(() => {
    async function getQuotes() {
      setIsLoading(true);
      const { data: quotes } = await supabase.from("quotes").select("*");
      setQuotes(quotes);
      setIsLoading(false);
    }
    getQuotes();
  }, []);

  return (
    <>
      <div className="container">
        <Header setQuotes={setQuotes} />
        <main className="main">
          {/* <Categories setCurrentCategory={setCurrentCategory} /> */}
          <Categories />

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
