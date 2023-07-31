import React from "react";
import axios from "axios";
import "./Basket.scss";
import Cart from "./Cart/Cart";
import Info from "../Info/Info";
import AppContext from "../../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Basket() {
  const { setCartOpened, setCartItems, cartItems } = React.useContext(AppContext);

  const onRemoveFromCart = (id) => {
    axios.delete(`https://64c3bbf367cfdca3b6603227.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [isOrderId, setIsOrderId] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const onClickOrder = async () =>{
    try {
        setIsLoading(true)
        const {data} = await axios.post('https://64c772a80a25021fde9280b0.mockapi.io/order', {
            items: cartItems
        })
        setIsOrderId(data.id)
        setIsOrderComplete(true)
        setCartItems([])

        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i]
            await axios.delete('https://64c3bbf367cfdca3b6603227.mockapi.io/cart/' + item.id)
            await delay(1000)
        }

    } catch (error) {
        alert('Не удалось создать заказ')
    }
    setIsLoading(false)
  }

  return (
    <div className="basket">
      <div className="container">
        <div className="basket__content">
          <div className="basket__title">
            Корзина
            <button
              className="basket__link"
              onClick={() => setCartOpened(false)}
            >
              <i className="bx bx-x"></i>
            </button>
          </div>

          {cartItems.length > 0 ? (
            <>
              <ul className="basket__list">
                {cartItems.map((val) => (
                  <li key={val.id} className="basket__item">
                    <Cart
                      title={val.title}
                      price={val.price}
                      imgUrl={val.imgUrl}
                      id={val.id}
                      onRemoveFromCart={onRemoveFromCart}
                    />
                  </li>
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
                  <button disabled={isLoading} className="basket__btn" onClick={onClickOrder}>
                    <div className="basket__text">Оформить заказ</div>
                    <i className="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Info
              title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
              text={isOrderComplete ? `Ваш заказ ${isOrderId} скоро будет подтвержден!` : "Добавьте хотя бы один товар, чтобы сделать заказ."}
              btnTitle="Вернуться назад"
              imgURL={isOrderComplete ? "./image/completed.jpg" : "./image/cart.png"}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default Basket;
