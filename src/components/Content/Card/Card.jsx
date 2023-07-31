import React from "react";
import './Card.scss';
import './Skelet.scss';
import AppContext from "../../../context";

function Card({id, title, price, imgUrl, onPlus, onLike, isFavorite = false, isLoading = false}) {
  const { isItemAdded } = React.useContext(AppContext)

  const [isLike, setIsLike] = React.useState(isFavorite)

  const onClickAdd = () => {
    onPlus({id, title, price, imgUrl})
  }

  const onClickLike = () => {
    onLike({id, title, price, imgUrl})
    setIsLike(!isLike)
  }

  return <article className="card">
    {isLoading ? <div className="skelet">
      <div className="skelet__image">
      </div>
        <div className="skelet__title"></div>
        <div className="skelet__text"></div>
        <div className="skelet__block">
            <div className="skelet__left"></div>
            <div className="skelet__right"></div>
        </div>
      </div> : <><div className="card__image">
        <button className={isLike ? 'card__like active' : 'card__like'} onClick={onClickLike}>
          <i className='bx bx-heart' ></i>
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
            <button className={isItemAdded(id) ? 'card__btn active' : 'card__btn'} onClick={onClickAdd}>
              <i className={isItemAdded(id) ? 'bx bx-check size' : 'bx bx-plus-medical '}></i>
            </button>
        </div>
      </div> </>
    }
  </article>;
}

export default Card;
