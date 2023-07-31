import React from "react";
import './Basket.scss';
import Cart from "./Cart/Cart";

function Basket({onClose, cartItems, setCartItems}) {
    const onRemoveFromCart = (id) => {
        // axios.delete(`https://64c3bbf367cfdca3b6603227.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
      }

  return <div className="basket">
    <div className="container">
        <div className="basket__content">
                <div className="basket__title">Корзина 
                    <button className="basket__link" onClick={onClose}>
                        <i className='bx bx-x'></i>
                    </button>
                </div>
                
                <ul className="basket__list">
                    {cartItems.map((val) => (
                        <li className="basket__item"><Cart title={val.title} price={val.price} imgUrl={val.imgUrl} id={val.id} onRemoveFromCart={onRemoveFromCart}/></li>
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
                        <i className='bx bx-right-arrow-alt' ></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>;
}

export default Basket;
