import React from 'react';

function Favorite() {
    return <main className="content">
    <div className="container">
        <div className="content__wrap">
            <div className="content__top">
              <div className="content__title">
                Мои закладки
              </div>
            </div>

            <ul className="content__list">  
                <li className="content__item">
                    тут мои закладки    
                </li>   
                <li className="content__item">
                    тут мои закладки    
                </li>   
                <li className="content__item">
                    тут мои закладки    
                </li>   
                <li className="content__item">
                    тут мои закладки    
                </li>
                
              {/* {props.items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                <li className="content__item">
                    card
                  <Card key={item.name} title={item.name} price={item.price} imgUrl={item.imgUrl} onPlus={(obj) => onAddToCart(obj)} onLike={(obj) => onAddToLikes(obj)} cartItems={props.cartItems} cartLikes={props.cartLikes}/>
                </li>                
              ))} */}
            </ul>
        </div>
    </div>
  </main>;
}

export default Favorite;
