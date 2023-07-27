import React from "react";
import './Content.scss'
import Card from "./Card";

function Content() {
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
              <li className="content__item">
                <Card />
              </li>
              <li className="content__item">
                <Card />
              </li>
              <li className="content__item">
                <Card />
              </li>
              <li className="content__item">
                <Card />
              </li>
            </ul>
        </div>
    </div>
  </main>;
}

export default Content;
