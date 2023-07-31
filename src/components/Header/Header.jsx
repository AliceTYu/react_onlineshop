import React from "react";
import './Header.scss'

function Header(props) {
  return <header className="header">
    <div className="container">
        <div className="header__wrap">
            <div className="header__logo">
                <div className="header__icon">
                    <i className='bx bxs-book-heart'></i>
                </div>
                <div className="header__content">
                    <div className="header__title">fantasy</div>
                    <div className="header__text">Магазин книг</div>
                </div>
            </div>
    
            <div className="header__info">
                <ul className="header__list">
                    <li className="header__item">
                        <button className="header__link" onClick={props.onClickCart}>
                            <div><i className='bx bxs-cart'></i></div>
                            <span className="header__price">1205 руб.</span>
                        </button>
                    </li>
                    <li className="header__item">
                        <div className="header__icons">
                        <a className="header__link" href="#"><i className='bx bx-heart' ></i></a>
                        </div>
                    </li>
                    <li className="header__item">
                        <div className="header__icons">
                        <a className="header__link" href="#"><i className='bx bx-user-circle'></i></a>
                        </div>
                    </li>
                    <li className="header__item">
                        <div className="header__icons">
                        <a className="header__link" href="#"><i className='bx bx-sun' ></i>
                        {/* <i class='bx bx-moon' ></i> */}
                        </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </header>;
}

export default Header;
