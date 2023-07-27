import React from "react";
import './Card.scss'

function Card() {
  return <article className="card">
    <div className="card__image">
        <div className="card__box">
          <img className="card__image-pic" src="./../../image/img01.jpeg" alt="book" />
        </div>
    </div>
    <div className="card__body">
      <div className="card__title">Игра престолов. Цикл "Песнь льда и огня"</div>
      <div className="card__block">
          <div className="card__left">
              <div className="card__text">Цена:</div>
              <div className="card__price">684 руб.</div>
          </div>
          <button className="card__btn">
            <div className="card__right">
                <i className='bx bx-plus-medical' ></i>
            </div>
          </button>
      </div>
    </div>
  </article>;
}

export default Card;
