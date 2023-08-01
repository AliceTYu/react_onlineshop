import React from "react";
import axios from "axios";
import Card from "../Content/Card/Card";
import AppContext from "../../context";

function Orders() {
    const [order, setOrder] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const {onAddToLikes, onAddToCart, cartItems, cartLikes} = React.useContext(AppContext)

  React.useEffect(() => {
    (async() => {
        try {
            const {data} = await axios.get('https://64c772a80a25021fde9280b0.mockapi.io/order')
            setOrder(data.reduce((prev, obj) => [...prev, ...obj.items], []))
            setIsLoading(false)
        } catch (error) {
            alert('Ошибка при запросе заказов')
        }
    })()
  }, []);

  return (
    <main className="content">
      <div className="container">
        <div className="content__wrap">
          {/* {order.length > 0 ? ( */}
          <>
            <div className="content__top">
              <div className="content__title">Мои заказы</div>
            </div>

            <ul className="content__list">
              {(isLoading ? [...Array(8)] : order).map((item) => (
                <li className="content__item">
                  <Card key={item && item.id}
                        {...item}
                        isLoading={isLoading}/>
                </li>
              ))}
            </ul>
          </>
        </div>
      </div>
    </main>
  );
}

export default Orders;
