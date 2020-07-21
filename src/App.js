import React, { useEffect } from 'react';
import Root from "./Root";
import Routes from "./Routes";
import "./App.css";
import { Provider } from "react-redux";
import { rootSaga } from "./store/sagas";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor, sagaMiddleware } from "./store";

sagaMiddleware.run(rootSaga);

const App = () => {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root>
          <Routes />
        </Root>
      </PersistGate>
    </Provider>
      
  ); 
}

export default App;
