import React from "react";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Quotes from "./Components/Quotes";
import "./style.css";

export default function App() {
  return (
    <>
      <body>
        <div class="container">
          <Header />
          <main className="main">
            <Categories />
            <Quotes />
          </main>
        </div>
      </body>
    </>
  );
}
