import React from "react";
import axios from "axios";
import Basket from "./components/Basket/Basket";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
  // fetch
  //   fetch('https://64c3bbf367cfdca3b6603227.mockapi.io/items').then(res => {
  //   return res.json()
  // }).then(json => {setItems(json)})

  //  axios
    axios.get('https://64c3bbf367cfdca3b6603227.mockapi.io/items').then(res => setItems(res.data))

    axios.get('https://64c3bbf367cfdca3b6603227.mockapi.io/cart').then(res => setCartItems(res.data))
  }, [])  

  return (
    <div className="wrapper">
      {cartOpened && <Basket cartItems={cartItems} onClose={() => setCartOpened(false)} setCartItems={setCartItems}/>}

      <div className="wrapper__header">
        <Header onClickCart={() => setCartOpened(true)}/>
      </div>
      <div className="wrapper__content">
        <Content items={items} setCartItems={setCartItems} cartItems={cartItems}/>
      </div>
    </div>
  );
}

export default App;
