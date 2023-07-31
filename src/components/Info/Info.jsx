import React from "react";
import AppContext from "../../context";

function Info({title, text, btnTitle, imgURL}) {
    const {setCartOpened} = React.useContext(AppContext)

  return (
    <div className="basket__empty">
      <div className="basket__img">
        <img className="basket__img-pic" src={imgURL} alt="cart" />
      </div>
      <div className="basket__titl">{title}</div>
      <div className="basket__txt">
        {text}
      </div>
      <button className="basket__btn" onClick={() => setCartOpened(false)}>
        <i className="bx bx-right-arrow-alt rotate"></i>
        <div className="basket__text">{btnTitle}</div>
      </button>
    </div>
  );
}

export default Info;
