import React from "react";
import './Basket.scss';
import Cart from "./Cart/Cart";

function Basket() {
  return <div className="basket">
    <div className="container">
        <div className="basket__content">
                <div className="basket__title">Корзина 
                    <a className="basket__link" href="#">
                    <i class='bx bx-x'></i>
                    </a>
                </div>
                
                <ul className="basket__list">
                    <li className="basket__item"><Cart/></li>
                    <li className="basket__item"><Cart/></li>
                </ul>
            <div className="basket__botton">
                <div className="basket__block">
                    <div className="basket__text">Итого:</div>
                    <div className="basket__price">1 975 руб.</div>
                </div>
                <div className="basket__block">
                    <div className="basket__text">Налог 5%:</div>
                    <div className="basket__price">85 руб.</div>
                </div>
                <div className="basket__block">
                    <button className="basket__btn">
                        <div className="basket__text">
                            Оформить заказ
                        </div>
                        <i class='bx bx-right-arrow-alt' ></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>;
}

export default Basket;
