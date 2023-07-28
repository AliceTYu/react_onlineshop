import React from "react";
import './Content.scss'
import Card from "./Card/Card";

const arrBooks = []

function Content(props) {
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
              {props.items.map(val => (
                <li className="content__item">
                  <Card title={val.name} price={val.price} imgUrl={val.imgUrl} />
                </li>                
              ))}
            </ul>
        </div>
    </div>
  </main>;
}

export default Content;
