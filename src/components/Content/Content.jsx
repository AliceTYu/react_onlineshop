import React from "react";
import "./Content.scss";
import Card from "./Card/Card";
import AppContext from "../../context";

function Content({cartLikes}) {
  const {items, cartItems, isLoading, onAddToCart, onAddToLikes} = React.useContext(AppContext)
  const [searchValue, setSearchValue] = React.useState("");

  const omChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const renderItems = () => { 
    const filterItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    
    return (isLoading ? [...Array(8)] : filterItems).map((item, index) => (
        <li className="content__item">
          <Card
            key={item && item.id}
            {...item}
            onPlus={(obj) => onAddToCart(obj)}
            onLike={(obj) => onAddToLikes(obj)}
            cartItems={cartItems}
            cartLikes={cartLikes}
            isLoading={isLoading}
          />
        </li>
      ))
  }

  return (
    <main className="content">
      <div className="container">
        <div className="content__wrap">
          <div className="content__top">
            <div className="content__title">
              {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все книги"}
            </div>
            <div className="content__search">
              <i className="bx bx-search content__icon"></i>
              <input
                onChange={omChangeSearchInput}
                value={searchValue}
                placeholder="Поиск..."
                className="content__inp"
              ></input>
              {searchValue && (
                <i
                  onClick={() => {
                    setSearchValue("");
                  }}
                  className="bx bx-x content__icon clear"
                ></i>
              )}
            </div>
          </div>

          <ul className="content__list">
            {renderItems()}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Content;
