import React from "react";
import Card from "../Content/Card/Card";

function Favorite(props) {
  return (
    <main className="content">
      <div className="container">
        <div className="content__wrap">
          <div className="content__top">
            <div className="content__title">Мои закладки</div>
          </div>

          <ul className="content__list">
            {props.items.map((item) => (
              <li className="content__item">
                <Card
                  key={item.name}
                  {... item}
                  // title={item.title}
                  // price={item.price}
                  // imgUrl={item.imgUrl}
                  isFavorite={true}
                  onLike={props.onAddToLikes}
                  // cartItems={props.cartItems}
                  // cartLikes={props.cartLikes}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Favorite;
