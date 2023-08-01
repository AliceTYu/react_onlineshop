import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./components/Basket/Basket";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Favorite from "./components/Favorite/Favorite";
import AppContext from './context.js'
import Orders from "./components/Orders/Orders";


function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [cartItems, setCartItems] = React.useState([])
  const [cartLikes, setCartLikes] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoriteResponse, itemsResponse] = await Promise.all([axios.get('https://64c3bbf367cfdca3b6603227.mockapi.io/cart'), axios.get('https://64c772a80a25021fde9280b0.mockapi.io/favourites'), axios.get('https://64c3bbf367cfdca3b6603227.mockapi.io/items')])

        setIsLoading(false)

        setCartItems(cartResponse.data)
        setCartLikes(favoriteResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        alert('Ошибка при запросе данных')
      }
    }
    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if(findItem){
        setCartItems((prev) => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://64c772a80a25021fde9280b0.mockapi.io/cart/${findItem.id}`)
      } else {
        setCartItems((prev) => [...prev, obj])
        const {data} = await axios.post('https://64c3bbf367cfdca3b6603227.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev.map(item => {
          if (item.parentId == data.parentId){
            return {
              ...item,
              id: data.id
            }
          }
          return
        })])
      }
    } catch (error) {
      alert("Не удалось добавить в корзину!")
    }
  }

  const onAddToLikes = async (obj) => {
    try{
      if(cartLikes.find(favObj => Number(favObj.id) === Number(obj.id))){
        axios.delete(`https://64c772a80a25021fde9280b0.mockapi.io/favourites/${obj.id}`)
        setCartLikes((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)) )
      } else {
        const { data } = await axios.post('https://64c772a80a25021fde9280b0.mockapi.io/favourites', obj)
        setCartLikes((prev) => [...prev, data])
      }
    }
    catch (error) {
      alert("Не удалось добавить в фавориты!")
    }
  }

  const isItemAdded = (id) =>{
    return cartItems.some(obj => Number(obj.parentId) === Number(id))
  }

  return (
    <BrowserRouter>
      <AppContext.Provider value={{items, cartItems, cartLikes, isItemAdded, setCartOpened, setCartItems, onAddToCart, onAddToLikes}}>

        <div className="wrapper">
          {cartOpened && <Basket cartLikes={cartLikes} cartItems={cartItems} onClose={() => setCartOpened(false)}  />}
  
          <div className="wrapper__header"> 
            <Header onClickCart={() => setCartOpened(true)} />
          </div>
  
          <div className="wrapper__content">
            <Routes >
              <Route path="/" element={<Content />} />
  
              <Route path="/favorites" element={<Favorite />} />
  
              <Route path="/orders" element={<Orders/>} />
            </Routes >
  
          </div>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
