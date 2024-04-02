import React, { memo, useEffect, useState } from "react";
import "../../sass/links.scss";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

function Links() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  useEffect(() => {
    setLoading(true);
    let url =
      categoryValue === ""
        ? `${API_URL}/categories`
        : `${API_URL}/category/${categoryValue}`;
    axios
      .get(url)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryValue]);
  let categoryItems = categories?.map((el, i) => (
    <li
      onClick={(e) => setCategoryValue(e.target.innerHTML)}
      key={i}
      className="products__link"
    >
      {el}
    </li>
  ));
  return (
    <>
      {loading && (
        <div id="loading">
          <span class="loader"></span>
        </div>
      )}
      <div class="container">
        <div class="products__top">
          <h2 class="products__top__title">Popular Products</h2>
          <ul class="products__list" style={{ cursor: "pointer" }}>
            <li class="products__link">All</li>
            {categoryItems}
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(Links);
