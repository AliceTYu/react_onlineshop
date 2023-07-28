import Basket from "./components/Basket/Basket";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Basket />
      <div className="wrapper__header">
        <Header />
      </div>
      <div className="wrapper__content">
        <Content />
      </div>
    </div>
  );
}

export default App;
