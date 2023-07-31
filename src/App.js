import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./components/Basket/Basket";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Favorite from "./components/Favorite/Favorite";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])
  const [cartLikes, setCartLikes] = React.useState([])
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    // fetch
    //   fetch('https://64c3bbf367cfdca3b6603227.mockapi.io/items').then(res => {
    //   return res.json()
    // }).then(json => {setItems(json)})

    //  axios
    axios.get('https://64c3bbf367cfdca3b6603227.mockapi.io/items').then(res => setItems(res.data))

    axios.get('https://64c3bbf367cfdca3b6603227.mockapi.io/cart').then(res => setCartItems(res.data))

    axios.get('https://64c772a80a25021fde9280b0.mockapi.io/favourites').then(res => setCartLikes(res.data))
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://64c3bbf367cfdca3b6603227.mockapi.io/cart', obj)
    setCartItems([...cartItems, obj])
    // props.setCartItems((prev) => [...prev, obj])
  }

  const onAddToLikes = async (obj) => {
    try{
      if(cartLikes.find(favObj => favObj.id === obj.id)){
      axios.delete(`https://64c772a80a25021fde9280b0.mockapi.io/favourites/${obj.id}`)
      } else {
        const { data } = await axios.post('https://64c772a80a25021fde9280b0.mockapi.io/favourites', obj)
        setCartLikes((prev) => [...prev, data])
      }
    }
    catch (error) {
      alert("Не удалось добавить в фавориты!")
    }
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        {cartOpened && <Basket cartItems={cartItems} onClose={() => setCartOpened(false)} setCartItems={setCartItems} />}

        <div className="wrapper__header">
          <Header onClickCart={() => setCartOpened(true)} />
        </div>

        <div className="wrapper__content">
          <Routes >
            <Route path="/" element={<Content 
            items={items} 
            setCartItems={setCartItems} 
            cartItems={cartItems}
            onAddToCart={onAddToCart}
            onAddToLikes={onAddToLikes}
            />} />

            <Route path="/favorites" element={<Favorite 
            items={cartLikes} 
            // onAddToCart={onAddToCart}
            onAddToLikes={onAddToLikes}
            />} />

            <Route path="/person" element={123} />
          </Routes >

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
