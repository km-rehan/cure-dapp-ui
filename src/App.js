import React from 'react';
import Root from "./Root";
import Routes from "./Routes";
import "./App.css";
import { ConfigProvider } from "react-avatar";

function App() {
  return (
    <ConfigProvider colors={['red', 'blue']}>
      <Root>
        <Routes />
      </Root>
    </ConfigProvider>
  );
}

export default App;
