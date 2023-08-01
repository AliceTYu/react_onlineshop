import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

function Header(props) {
  const { finishPrice } = useCart()

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Link to="/" className="header__logo">
            <div className="header__icon">
              <i className="bx bxs-book-heart"></i>
            </div>
            <div className="header__content">
              <div className="header__title">fantasy</div>
              <div className="header__text">Магазин книг</div>
            </div>
          </Link>

          <div className="header__info">
            <ul className="header__list">
              <li className="header__item">
                <button className="header__link" onClick={props.onClickCart}>
                  <div>
                    <i className="bx bxs-cart"></i>
                  </div>
                  <span className="header__price">{finishPrice} руб.</span>
                </button>
              </li>

              <li className="header__item">
                <div className="header__icons">
                  <Link className="header__link" to="/favorites">
                    <i className="bx bx-heart"></i>
                  </Link>
                </div>
              </li>

              <li className="header__item">
                <div className="header__icons">
                  <Link className="header__link" to="/orders">
                    <i className="bx bx-user-circle"></i>
                  </Link>
                </div>
              </li>

              <li className="header__item">
                <div className="header__icons">
                  <a className="header__link" href="#">
                    <i className="bx bx-sun"></i>
                    {/* <i class='bx bx-moon' ></i> */}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
