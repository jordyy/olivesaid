import React from "react";

export default function Categories() {
  return (
    <aside>
      <ul>
        SOMETHING.map(something => {
        <li className="category" key={}>
            <button className={`btn btn-${categoryName}`}>{}</button>
            </li>
        }
 
        <li class="category">
          <button className="btn btn-all-categories">All</button>
        </li>
        <li class="category">
          <button
            className="btn btn-category"
            style="background-color: #480ca8"
          >
            Holidays
          </button>
        </li>
        <li class="category">
          <button
            className="btn btn-category"
            style="background-color: #b5179e"
          >
            Family
          </button>
        </li>
      </ul>
    </aside>
  );
}
