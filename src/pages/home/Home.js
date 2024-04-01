import React, { memo } from "react";
import "../../sass/home.scss";
import { Categorys } from "../../static";
import Links from "../../components/links/Links";
import Products from "../../components/products/Products";

function Home() {
  return (
    <>
      <header className="header">
        <div class="container">
          <div class="header__info">
            <div class="header__left">
              <h3 class="header__h3">
                <strong class="header__strong">100%</strong> Organic Vegetables
              </h3>
              <h2 class="header__title">The best way to stuff your wallet.</h2>
              <p class="header__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                reiciendis beatae consequuntur.
              </p>
              <div class="header__btns">
                <i class="fa-solid fa-paper-plane header__icon"></i>
                <input
                  type="text"
                  placeholder="Your emaill address"
                  class="header__input"
                />
                <button class="header__btn">Subscribe</button>
              </div>
            </div>
            <div class="header__right">
              <div class="header__row">
                <div class="header__card">
                  <i class="fa-solid fa-xmark header__card__icon"></i>
                  <p class="header__card__text">Shopping</p>
                </div>
                <div class="header__card">
                  <i class="fa-solid fa-xmark header__card__icon"></i>
                  <p class="header__card__text">Recips</p>
                </div>
                <div class="header__card">
                  <i class="fa-solid fa-xmark header__card__icon"></i>
                  <p class="header__card__text">Kitchen</p>
                </div>
                <div class="header__card">
                  <i class="fa-solid fa-xmark header__card__icon"></i>
                  <p class="header__card__text">News</p>
                </div>
                <div class="header__card">
                  <i class="fa-solid fa-xmark header__card__icon"></i>
                  <p class="header__card__text">Food</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="category">
          <div className="container">
            <div className="category__box">
              {Categorys?.map((el, i) => (
                <div
                  key={i}
                  style={{
                    background: `url(${el.img}) no-repeat center/cover`,
                  }}
                  class="category__card"
                >
                  <h2 class="category__title">{el.title}</h2>
                  <a href="#" class="category__btn">
                    {el.btn}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Links />
        <Products />
      </main>
    </>
  );
}

export default memo(Home);
