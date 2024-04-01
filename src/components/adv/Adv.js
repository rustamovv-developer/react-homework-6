import React, { memo } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
import { Links } from "../../static/index";
import "../../sass/adv.scss";

function Nav() {
  return (
    <div className="adv">
      <div className="container-fluid">
        <div className="adv__info">
          <RiMenu2Fill className="adv__menu" />
          <ul className="adv__list">
            {Links.map((el, i) => (
              <a className="adv__link" key={i} href="/">
                {el} <IoChevronDownOutline />
              </a>
            ))}
          </ul>
          <a href="tel:+998887041980" className="adv__right">
            <MdOutlineLocalPhone className="adv__phone" />
            <p className="adv__text">+123 ( 456 ) ( 7890 )</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Nav);
