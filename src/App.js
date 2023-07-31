import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./components/Basket/Basket";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Favorite from "./components/Favorite/Favorite";

function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [cartItems, setCartItems] = React.useState([])
  const [cartLikes, setCartLikes] = React.useState([])

  React.useEffect(() => {
    // fetch
    //   fetch('https://64c3bbf367cfdca3b6603227.mockapi.io/items').then(res => {
    //   return res.json()
    // }).then(json => {setItems(json)})

    //  axios
    async function fetchData() {
      setIsLoading(true)

      const cartResponse = await axios.get('https://64c3bbf367cfdca3b6603227.mockapi.io/cart')
      const favoriteResponse = await axios.get('https://64c772a80a25021fde9280b0.mockapi.io/favourites')
      const itemsResponse =  await axios.get('https://64c3bbf367cfdca3b6603227.mockapi.io/items')

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setCartLikes(favoriteResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    try {
      console.log(obj)
      if(cartItems.find((item) => Number(item.id) === Number(obj.id))){
        axios.delete(`https://64c772a80a25021fde9280b0.mockapi.io/cart/${obj.id}`)
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        axios.post('https://64c3bbf367cfdca3b6603227.mockapi.io/cart', obj)
        // setCartItems([...cartItems, obj])
        setCartItems((prev) => [...prev, obj])
      }
    } catch (error) {
      alert("Не удалось добавить в корзину!")
    }
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
        {cartOpened && <Basket cartLikes={cartLikes} cartItems={cartItems} onClose={() => setCartOpened(false)} setCartItems={setCartItems} />}

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
            isLoading={isLoading}
            />} />

            <Route path="/favorites" element={<Favorite 
            items={cartLikes}
            onAddToLikes={onAddToLikes}
            />} />

            <Route path="/orders" element={123} />
          </Routes >

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
