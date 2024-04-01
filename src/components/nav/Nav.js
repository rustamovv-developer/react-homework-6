import React, { memo } from "react";
import "../../sass/nav.scss";
import navImg from "../../assets/images/nav-log.png";
import { CiSearch } from "react-icons/ci";

function Nav() {
  return (
    <nav className="nav">
      <div className="container-fluid">
        <div class="nav__info">
          <a href="/">
            <img src={navImg} alt="nav__logo" class="nav__img" />
          </a>
          <div class="nav__center">
            <input
              class="nav__input"
              type="text"
              placeholder="Search For items..."
            />
            <select class="nav__select">
              <option value="categories">All Categories</option>
            </select>
            <button class="nav__btn">
              <CiSearch className="nav__search" />
            </button>
          </div>
          <div class="nav__end">
            <div class="nav__card">
              <i class="fa-solid fa-user nav__card__icon"></i>
              <p class="nav__card__text">Account</p>
            </div>
            <div class="nav__card">
              <i class="fa-solid fa-heart nav__card__icon"></i>
              <p class="nav__card__text">Wishlist</p>
            </div>
            <div class="nav__card">
              <i class="fa-solid fa-cart-shopping nav__card__icon"></i>
              <p class="nav__card__text">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Nav);
