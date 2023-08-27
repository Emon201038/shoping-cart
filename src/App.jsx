import { useState } from "react";

import store from "./redux/store";
import "./styles/styles.css";
import { Provider } from "react-redux";
import Head from "./components/Home/Head";
import Main from "./components/Home/main/Main";
import Cart from "./components/cart/Cart";

function App() {
  const [isCart, setIsCartPage] = useState(false);
  return (
    <Provider store={store}>
      <Head setIsCartPage={setIsCartPage} />
      {!isCart ? <Main /> : <Cart />}
    </Provider>
  );
}

export default App;
