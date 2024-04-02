import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import "../../sass/product.scss";
import star from "../../assets/images/star.png";

const API = "https://fakestoreapi.com/products";

function Product() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axios
      .get(API)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  let findProduct = products?.find((el) => el.id === +id);

  return (
    <>
      {loading && (
        <div id="loading">
          <span class="loader"></span>
        </div>
      )}
      <div className="top">
        <div className="container-fluid">
          <div className="top__info">
            <h2 className="top__title">Product</h2>
            <div className="top__end">
              <a href="/" className="top__link">
                Home -
              </a>
              <a href="#" className="top__link">
                Product
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="product__info">
          <div className="product__left">
            <h2 className="product__left__title">product Category</h2>
            <div className="product__left__box">
              <div className="product__left__card">
                <p className="product__left__text">Juice & Drinks</p>
                <p className="product__left__text">[20]</p>
              </div>
              <div className="product__left__card">
                <p className="product__left__text">Dairy & Milk</p>
                <p className="product__left__text">[54]</p>
              </div>
              <div className="product__left__card">
                <p className="product__left__text">Snack & Spice</p>
                <p className="product__left__text">[64]</p>
              </div>
            </div>
            <h2 className="product__left__title">Filter By Price</h2>
            <input
              style={{ width: "256px", accentColor: "#F53E32" }}
              type="range"
            />
            <div className="product__left__exam">
              <h3 className="product__left__h3">Price :</h3>
              <p className="product__left__text">$20 - $250</p>
            </div>
            <button className="product__left__btn">Filter</button>
            <h2 className="product__left__title">product Category</h2>
            <div className="product__left__box">
              <div className="product__left__card">
                <p className="product__left__text">Blue</p>
                <div className="product__left__color blue"></div>
              </div>
              <div className="product__left__card">
                <p className="product__left__text">Yellow</p>
                <div className="product__left__color yellow"></div>
              </div>
              <div className="product__left__card">
                <p className="product__left__text">Red</p>
                <div className="product__left__color red"></div>
              </div>
              <div className="product__left__card">
                <p className="product__left__text">Green</p>
                <div className="product__left__color green"></div>
              </div>
            </div>
            <h2 className="product__left__title">Weight</h2>
            <div className="product__left__box">
              <p className="product__left__text">2kg Pack</p>
              <p className="product__left__text">20kg Pack</p>
              <p className="product__left__text">30kg pack</p>
            </div>
            <h2 className="product__left__title">Products Tages</h2>
            <div className="product__left__box">
              <div className="product__left__card">
                <p className="product__left__text">Vegetables</p>
                <p className="product__left__text">juice</p>
              </div>
              <div className="product__left__card">
                <p className="product__left__text">Food</p>
                <p className="product__left__text">Dry Fruits</p>
              </div>
              <div className="product__left__card">
                <p className="product__left__text">Vegetables</p>
                <p className="product__left__text">juice</p>
              </div>
            </div>
          </div>
          <div className="product__right">
            <div className="product__top">
              <div className="product__top__card">
                <img
                  src={findProduct?.image}
                  alt="img"
                  className="product__top__img"
                />
                <div className="product__top__end">
                  <img
                    src={findProduct?.image}
                    alt="img"
                    className="product__top__end__img"
                  />
                  <img
                    src={findProduct?.image}
                    alt="img"
                    className="product__top__end__img"
                  />
                  <img
                    src={findProduct?.image}
                    alt="img"
                    className="product__top__end__img"
                  />
                  <img
                    src={findProduct?.image}
                    alt="img"
                    className="product__top__end__img"
                  />
                  <img
                    src={findProduct?.image}
                    alt="img"
                    className="product__top__end__img"
                  />
                </div>
              </div>
              <div className="product__top__card">
                <h2 className="product__right__title">
                  Seeds Of Change Oraganic Quinoa, Brown
                </h2>
                <p className="product__right__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  iure minus error doloribus saepe natus?
                </p>
                <p className="product__right__text">
                  {findProduct?.rating.rate}
                  <img src={star} alt="" />
                </p>
                <div className="product__right__exam">
                  <h3 className="product__right__h3">Brand :</h3>
                  <p className="product__right__text">ESTA BETTERU CO</p>
                </div>
                <div className="product__right__exam">
                  <h3 className="product__right__h3">Flavour :</h3>
                  <p className="product__right__text">Super Saver Pack</p>
                </div>
                <div className="product__right__exam">
                  <h3 className="product__right__h3">Diet Type :</h3>
                  <p className="product__right__text">Vegetarian</p>
                </div>
                <div className="product__right__exam">
                  <h3 className="product__right__h3">Weight :</h3>
                  <p className="product__right__text">200 Grams</p>
                </div>
                <div className="product__right__exam">
                  <h3 className="product__right__h3">Speciality :</h3>
                  <p className="product__right__text">
                    Gluten Free, Sugar Free
                  </p>
                </div>
                <div className="product__right__exam">
                  <h3 className="product__right__h3">Info :</h3>
                  <p className="product__right__text">
                    Egg Free, Allergen-Free
                  </p>
                </div>
                <div className="product__right__exam">
                  <h3 className="product__right__h3">Items :</h3>
                  <p className="product__right__text">1</p>
                </div>
                <h4 className="product__right__h4">
                  $120.25 <span className="product__right__span">$123.25</span>
                </h4>
                <div className="product__right__col">
                  <h3 className="product__right__h3">Size/Weight :</h3>
                  <button className="product__right__button">50kg</button>
                  <button className="product__right__button">80kg</button>
                  <button className="product__right__button">120kg</button>
                  <button className="product__right__button">200kg</button>
                </div>
                <div className="product__right__key">
                  <h5 className="product__right__h5">1</h5>
                  <div className="product__right__plus__minus">
                    <h4 className="product__right__pm">+</h4>
                    <h4 className="product__right__pm">-</h4>
                  </div>
                  <button className="product__right__btn">Add to cart</button>
                  <CiHeart className="product__right__icon" />
                  <FiEye className="product__right__icon" />
                </div>
              </div>
            </div>
            <div className="product__bottom">
              <div className="product__right__index">
                <h2 className="product__bottom__title">Description</h2>
                <h2 className="product__bottom__title">Information</h2>
                <h2 className="product__bottom__title">Review</h2>
              </div>
              <p className="product__bottom__text">
                {findProduct?.description}
              </p>
              <h3 className="product__bottom__h3">Packaging & Delivery</h3>
              <p className="product__bottom__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                in vero perferendis dolor! Quis vel consequuntur repellat
                distinctio rem. Corrupti ratione alias odio, error dolore
                temporibus consequatur, nobis veniam odit laborum dignissimos
                consectetur quae vero in perferendis provident quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
