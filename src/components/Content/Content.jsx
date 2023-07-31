import React from "react";
import "./Content.scss";
import Card from "./Card/Card";

function Content(props) {
  const [searchValue, setSearchValue] = React.useState("");

  const omChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const renderItems = () => { 
    const filterItems = props.items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    
    return (props.isLoading ? [...Array(10)] : filterItems).map((item, index) => (
        <li className="content__item">
          <Card
            key={index}
            {...item}
            onPlus={(obj) => props.onAddToCart(obj)}
            onLike={(obj) => props.onAddToLikes(obj)}
            isCart={props.cartItems.some(obj => Number(obj.id) === Number(item.id))}
            cartItems={props.cartItems}
            cartLikes={props.cartLikes}
            isLoading={props.isLoading}
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
