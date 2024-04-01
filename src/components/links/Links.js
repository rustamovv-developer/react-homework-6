import React, { memo } from "react";
import "../../sass/links.scss";

function Links() {
  return (
    <div class="container">
      <div class="products__top">
        <h2 class="products__top__title">Popular Products</h2>
        <ul class="products__list">
          <li class="products__item">
            <a href="#" class="products__link">
              All
            </a>
          </li>
          <li class="products__item">
            <a href="#" class="products__link">
              Milks & Dairies
            </a>
          </li>
          <li class="products__item">
            <a href="#" class="products__link">
              Coffes & Teas
            </a>
          </li>
          <li class="products__item">
            <a href="#" class="products__link">
              Pet Foods
            </a>
          </li>
          <li class="products__item">
            <a href="#" class="products__link">
              Meats
            </a>
          </li>
          <li class="products__item">
            <a href="#" class="products__link">
              Vegetables
            </a>
          </li>
          <li class="products__item">
            <a href="#" class="products__link">
              Fruits
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(Links);
