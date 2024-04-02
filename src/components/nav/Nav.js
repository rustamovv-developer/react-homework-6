import React, { memo, useEffect, useState } from "react";
import "../../sass/nav.scss";
import navImg from "../../assets/images/nav-log.png";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL = "https://fakestoreapi.com/products";

function Nav() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  useEffect(() => {
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

  let categoryItem = categories?.map((el, i) => (
    <option key={i} value={el}>
      {el}
    </option>
  ));
  return (
    <>
      <nav className="nav">
        <div className="container-fluid">
          <div class="nav__info">
            <Link to={"/"}>
              <img src={navImg} alt="nav__logo" class="nav__img" />
            </Link>
            <div class="nav__center">
              <input
                class="nav__input"
                type="text"
                placeholder="Search For items..."
              />
              <select
                onChange={(e) => setCategoryValue(e.target.value)}
                class="nav__select"
              >
                <option value="">All Categories</option>
                {categoryItem}
              </select>
              <button class="nav__btn">
                <CiSearch className="nav__search" />
              </button>
            </div>
            <div class="nav__end">
              <Link to={"/login"} class="nav__card">
                <i class="fa-solid fa-user nav__card__icon"></i>
                <p class="nav__card__text">Account</p>
              </Link>
              <Link to={"#"} class="nav__card">
                <i class="fa-solid fa-heart nav__card__icon"></i>
                <p class="nav__card__text">Wishlist</p>
              </Link>
              <div class="nav__card">
                <i class="fa-solid fa-cart-shopping nav__card__icon"></i>
                <p class="nav__card__text">Cart</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default memo(Nav);
