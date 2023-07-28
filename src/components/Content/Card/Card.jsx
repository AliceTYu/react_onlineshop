import React from "react";
import './Card.scss';

function Card({title, price, imgUrl, onPlus, onLike}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLike, setIsLike] = React.useState(false);

  const onClickAdd = () => {
    onPlus({title, price, imgUrl})
    setIsAdded(!isAdded)
  }

  const onClickLike = () => {
    onLike()
    setIsLike(!isLike)
  }

  return <article className="card">
    <div className="card__image">
      <button className={isLike ? 'card__like active' : 'card__like'} onClick={onClickLike}>
        <i class='bx bx-heart' ></i>
      </button>
        <div className="card__box">
          <img className="card__image-pic" src={imgUrl} alt="book" />
        </div>
    </div>
    <div className="card__body">
      <div className="card__title">{title}</div>
      <div className="card__block">
          <div className="card__left">
              <div className="card__text">Цена:</div>
              <div className="card__price">{price} руб.</div>
          </div>
          <button className={isAdded ? 'card__btn active' : 'card__btn'} onClick={onClickAdd}>
            <i className={isAdded ? 'bx bx-check size' : 'bx bx-plus-medical '}></i>
          </button>
      </div>
    </div>
  </article>;
}

export default Card;
