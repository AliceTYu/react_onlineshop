import React from "react";
import './Content.scss'
import Card from "./Card";

function Content() {
  return <main className="content">
    <div className="container">
        <div className="content__wrap">
            <div className="content__title">
              Все книги
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
