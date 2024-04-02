import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/admin.png";
import "../../sass/admin.scss";

function Admin() {
  return (
    <>
      <div className="top">
        <div className="container-fluid">
          <div className="top__info">
            <h2 className="top__title">Admin</h2>
            <div className="top__end">
              <Link to={"/"} className="top__link">
                Home -
              </Link>
              <Link to={"#"} className="top__link">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="admin">
        <div className="container-fluid">
          <div className="admin__info">
            <div className="admin__left">
              <h2 className="admin__title">Admin</h2>
              <p className="admin__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, recusandae necessitatibus quasi incidunt alias adipisci
                pariatur earum iure beatae assumenda rerum quod. Tempora magni
                autem a voluptatibus neque.
              </p>
              <p className="admin__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vitae rerum cum accusamus magni consequuntur architecto, ipsum
                deleniti expedita doloribus suscipit voluptatum eius perferendis
                amet!.
              </p>
              <p className="admin__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, maxime amet architecto est exercitationem optio ea
                maiores corporis beatae, dolores doloribus libero nesciunt qui
                illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                blanditiis quod aspernatur! Iusto?
              </p>
              <div className="admin__box">
                <div className="admin__card">
                  <h3 className="admin__h3">
                    0.1 <strong className="admin__strong">k</strong>
                  </h3>
                  <h4 className="admin__h4">Vendors</h4>
                </div>
                <div className="admin__card">
                  <h3 className="admin__h3">
                    23 <strong className="admin__strong">k</strong>
                  </h3>
                  <h4 className="admin__h4">Customers</h4>
                </div>
                <div className="admin__card">
                  <h3 className="admin__h3">
                    2 <strong className="admin__strong">k</strong>
                  </h3>
                  <h4 className="admin__h4">Products</h4>
                </div>
              </div>
            </div>
            <img src={img} alt="admin__img" className="admin__img" />
          </div>
          <div className="admin__bottom">
            <div className="admin__yes">
              <h2 className="admin__t">Product Packing</h2>
              <p className="admin__tex">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
            <div className="admin__yes">
              <h2 className="admin__t">24X7 Support</h2>
              <p className="admin__tex">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
            <div className="admin__yes">
              <h2 className="admin__t">Delivery in 5 Days</h2>
              <p className="admin__tex">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
            <div className="admin__yes">
              <h2 className="admin__t">Payment Secure</h2>
              <p className="admin__tex">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
