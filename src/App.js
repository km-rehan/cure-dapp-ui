import React, { useEffect } from 'react';
import Root from "./Root";
import Routes from "./Routes";
import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "./store";

const store = configureStore();

const App = ({ hideLoader }) => {
  useEffect(hideLoader, []);
  
  return (
    <Provider store={store}>
      <Root>
        <Routes />
      </Root>
    </Provider>
      
  ); 
}

export default App;
