import React from "react";
import './Basket.scss';
import Cart from "./Cart/Cart";

function Basket({onClose, cartItems}) {
  return <div className="basket">
    <div className="container">
        <div className="basket__content">
                <div className="basket__title">Корзина 
                    <button className="basket__link" onClick={onClose}>
                        <i class='bx bx-x'></i>
                    </button>
                </div>
                
                <ul className="basket__list">
                    {cartItems.map((val) => (
                        <li className="basket__item"><Cart title={val.title} price={val.price} imgUrl={val.imgUrl}/></li>
                    ))}
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
