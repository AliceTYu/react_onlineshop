import React from "react";
import './Card.scss';

function Card(props) {
  return <article className="card">
    <div className="card__image">
      <button className="card__like">
        <i class='bx bx-heart' ></i>
      </button>
        <div className="card__box">
          <img className="card__image-pic" src="./../../image/img01.jpeg" alt="book" />
        </div>
    </div>
    <div className="card__body">
      <div className="card__title">{props.title}</div>
      <div className="card__block">
          <div className="card__left">
              <div className="card__text">Цена:</div>
              <div className="card__price">{props.price} руб.</div>
          </div>
          <button className="card__btn">
            <i className='bx bx-plus-medical' ></i>
          </button>
      </div>
    </div>
  </article>;
}

export default Card;
