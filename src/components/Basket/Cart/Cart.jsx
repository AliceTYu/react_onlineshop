import React from "react";
import axios from "axios";
import './Cart.scss';

function Cart(props) {

  return <article className="cart">
    <div className="cart__image">
        <img src={props.imgUrl} alt="item" />
    </div>
    <div className="cart__body">
        <div className="cart__title">{props.title}</div>
        <div className="cart__text">{props.price} руб.</div>
    </div>
    <button className="cart__btn">
        <i className='bx bx-x' onClick={() => props.onRemoveFromCart(props.id)}></i>
    </button>
  </article>;
}

export default Cart;
