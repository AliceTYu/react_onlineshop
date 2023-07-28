import React from "react";
import Basket from "./components/Basket/Basket";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://64c3bbf367cfdca3b6603227.mockapi.io/items').then(res => {
    return res.json()
  }).then(json => {setItems(json)})
  }, [])  

  return (
    <div className="wrapper">
      {cartOpened && <Basket onClose={() => setCartOpened(false)}/>}

      <div className="wrapper__header">
        <Header onClickCart={() => setCartOpened(true)}/>
      </div>
      <div className="wrapper__content">
        <Content items={items}/>
      </div>
    </div>
  );
}

export default App;
