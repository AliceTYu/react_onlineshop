import React from "react";
import Basket from "./components/Basket/Basket";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper">
      {cartOpened && <Basket onClose={() => setCartOpened(false)}/>}

      <div className="wrapper__header">
        <Header onClickCart={() => setCartOpened(true)}/>
      </div>
      <div className="wrapper__content">
        <Content />
      </div>
    </div>
  );
}

export default App;
