import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import star from "../../assets/images/star.png";
import "../../sass/products.scss";

const API_URL = "https://fakestoreapi.com/products";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  let products = data?.map((el) => (
    <div key={el.id} className="products__card">
      <h4 class="products__h4">{el.id}</h4>
      <Link to={`/product/${el.id}`}>
        <img src={el.image} alt="products__img" class="products__img" />
      </Link>
      <h3 class="products__h3">{el.category}</h3>
      <h2 class="products__title">{el.title}</h2>
      <div class="products__raiting">
        <img src={star} alt="star" class="products__raiting__img" />
        <p class="products__raiting__text">
          By <strong class="products__raiting__strong">NestFood</strong>
        </p>
      </div>
      <div class="products__bottom">
        <div class="products__bottom__texts">
          <h3 class="products__bottom__h3">{el.price}</h3>
          <p class="products__bottom__text">$32.8</p>
        </div>
        <a href="#" class="products__bottom__btn">
          <i class="fa-solid fa-cart-shopping products__bottom__icon"></i>
          Add
        </a>
      </div>
    </div>
  ));
  return (
    <>
      {loading && (
        <div id="loading">
          <span class="loader"></span>
        </div>
      )}
      <div className="container">
        <div class="products__row">{products}</div>
      </div>
    </>
  );
}

export default memo(Products);
