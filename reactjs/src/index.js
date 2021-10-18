import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import StateLessComponent from "./component/StateLessComponent";
// import StateFullComponent from "./container/StateFullComponent";
import reportWebVitals from "./reportWebVitals";

import Home from "./container/Home/Home";

// State Management menggunakan Redux
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./redux/reducer/globalReducer";

// const HelloWorld = () => {
//   return <h2>Hello World</h2>;
// };

// State Management menggunakan Redux
// Store
// const storeRedux = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HelloWorld />

    <StateLessComponent />

    <StateFullComponent /> */}

    {/* State Management menggunakan Redux */}
    {/* <Provider store={storeRedux}>
      <Home />
    </Provider> */}

    {/* State Management menggunakan Context API */}
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
