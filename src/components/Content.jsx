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
                <Card title='Игра престолов.' price='865'/>
              </li>
              <li className="content__item">
                <Card title='Битва королей.' price='785'/>
              </li>
              <li className="content__item">
                <Card title='Буря мечей' price='904'/>
              </li>
              <li className="content__item">
                <Card title='Пир стервятников' price='836'/>
              </li>
            </ul>
        </div>
    </div>
  </main>;
}

export default Content;
