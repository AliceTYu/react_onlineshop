import React from "react";
import axios from "axios";
import './Content.scss'
import Card from "./Card/Card";

function Content(props) {
  const [searchValue, setSearchValue] = React.useState('')

  const onAddToCart = (obj) => {
    axios.post('https://64c3bbf367cfdca3b6603227.mockapi.io/cart', obj)
    props.setCartItems([...props.cartItems, obj])
    // props.setCartItems((prev) => [...prev, obj])
  }

  const onAddToLikes = (obj) => {
    axios.post('https://64c772a80a25021fde9280b0.mockapi.io/favourites', obj)
    props.setCartLikes([...props.cartLikes, obj])
  }

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
              {props.items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                <li className="content__item">
                  <Card key={item.name} title={item.name} price={item.price} imgUrl={item.imgUrl} onPlus={(obj) => onAddToCart(obj)} onLike={(obj) => onAddToLikes(obj)} cartItems={props.cartItems} cartLikes={props.cartLikes}/>
                </li>                
              ))}
            </ul>
        </div>
    </div>
  </main>;
}

export default Content;
