import React from "react";
import { CATEGORYDATA } from "../data";
import "../style.css";

export default function Categories() {
  const allCategories = CATEGORYDATA;
  return (
    <aside>
      <ul>
        {allCategories.map((category) => (
          <li className="category" key={category.name}>
            <button
              className="btn btn-category"
              style={{ backgroundColor: `${category.color}` }}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
