import React from "react";
import './Content.scss'
import Card from "./Card/Card";
import Cart from "../Basket/Cart/Cart";

const arrBooks = [
  {name: "Ученик убийцы. Королевский убийца.", price: 977, imgUrl:"/image/books/imgBook01.jpeg"},
  {name: "Гретель и её бесы", price: 509, imgUrl:"/image/books/imgBook02.jpeg"},
  {name: "История с кладбищем", price: 660, imgUrl:"/image/books/imgBook03.jpeg"},
  {name: "Ходячий замок", price: 490, imgUrl:"/image/books/imgBook04.jpeg"},
  {name: "Академия Стихий. Танец Огня", price: 560, imgUrl:"/image/books/imgBook05.jpg"},
  {name: "Институт", price: 250, imgUrl:"/image/books/imgBook06.jpg"},
  {name: "Страна чудес смертников. Том 13", price: 410, imgUrl:"/image/books/imgBook07.jpg"},
]

function Content() {
  const onClickButton = () => {
    console.log('add')
  }

  const onClickLikeButton = () => {
    console.log('like')
  }

  return <main className="content">
    <div className="container">
        <div className="content__wrap">
            <div className="content__top">
              <div className="content__title">
                Все книги
              </div>
              <div className="content__search">
                <i class='bx bx-search content__icon'></i>
                <input placeholder="Поиск..." className="content__inp"></input>
              </div>
            </div>
            <ul className="content__list">              
              {arrBooks.map(val => (
                <li className="content__item">
                  <Card title={val.name} price={val.price} imgUrl={val.imgUrl} onClickAdd={() => onClickButton()} onClickLike={() =>  onClickLikeButton()}/>
                </li>                
              ))}
            </ul>
        </div>
    </div>
  </main>;
}

export default Content;
