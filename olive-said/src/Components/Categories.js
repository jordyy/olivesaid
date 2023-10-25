import React from "react";
import { CATEGORYDATA } from "../data";
import "../style.css";

export default function Categories({ setCurrentCategory }) {
  const allCategories = CATEGORYDATA;
  return (
    <aside>
      <ul>
        <button
          className="btn btn-category category"
          onClick={() => setCurrentCategory("all")}
        >
          All Categories
        </button>

        {allCategories.map((category) => (
          <li className="category" key={category.name}>
            <button
              className="btn btn-category"
              style={{ backgroundColor: `${category.color}` }}
              onClick={() => setCurrentCategory(category.name)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
