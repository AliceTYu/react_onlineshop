import React from "react";
import Card from "../Content/Card/Card";

function Favorite(props) {
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
            {props.items.map((item) => (
              <li className="content__item">
                <Card
                  key={item.name}
                  {... item}
                  isFavorite={true}
                  onLike={props.onAddToLikes}
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
