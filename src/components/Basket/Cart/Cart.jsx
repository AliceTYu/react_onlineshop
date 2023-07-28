import React from "react";
import './Cart.scss';

function Cart() {
  return <article className="cart">
    <div className="cart__image">
        <img src="./../../image/img01.jpeg" alt="" />
    </div>
    <div className="cart__body">
        <div className="cart__title">Игра престолов. Цикл "Песнь льда и огня"</div>
        <div className="cart__text">684 руб.</div>
    </div>
    <button className="cart__btn">
        <i class='bx bx-x' ></i>
    </button>
  </article>;
}

export default Cart;
