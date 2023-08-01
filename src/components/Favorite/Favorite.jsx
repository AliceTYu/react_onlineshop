import React from "react";
import Card from "../Content/Card/Card";
import AppContext from "../../context.js";

function Favorite() {
  const {cartLikes, onAddToLikes, onAddToCart} = React.useContext(AppContext)

  return (
    <main className="content">
      <div className="container">
        <div className="content__wrap">

      {/* {cartLikes.length > 0 ? ( */}
        <>
          <div className="content__top">
            <div className="content__title">Мои закладки</div>
          </div>
  
          <ul className="content__list">
            {cartLikes.map((item) => (
              <li className="content__item">
                <Card
                  key={item.name}
                  {... item}
                  isFavorite={true}
                  onPlus={(obj) => onAddToCart(obj)}
                  onLike={(obj) => onAddToLikes(obj)}
                />
              </li>
            ))}
          </ul>
        </>

      </div>
      </div>
    </main>
  );
}

export default Favorite;
