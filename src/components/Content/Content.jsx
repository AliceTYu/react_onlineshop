import React from "react";
import axios from "axios";
import './Content.scss'
import Card from "./Card/Card";

function Content(props) {
  const [searchValue, setSearchValue] = React.useState('')

  const omChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return <main className="content">
    <div className="container">
        <div className="content__wrap">
            <div className="content__top">
              <div className="content__title">
                {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все книги"}
              </div>
              <div className="content__search">
                <i className='bx bx-search content__icon'></i>
                <input onChange={omChangeSearchInput} value={searchValue} placeholder="Поиск..." className="content__inp"></input>
                {searchValue && (<i onClick={() => {setSearchValue('')}} className='bx bx-x content__icon clear'></i>)}
              </div>
            </div>

            <ul className="content__list">              
              {props.items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                <li className="content__item">
                  <Card key={item.name} {...item} onPlus={(obj) => props.onAddToCart(obj)} onLike={(obj) => props.onAddToLikes(obj)} cartItems={props.cartItems} cartLikes={props.cartLikes}/>
                </li>                
              ))}
            </ul>
        </div>
    </div>
  </main>;
}

export default Content;
