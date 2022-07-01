import React from 'react';
import NavbarCom from './components/NavbarCom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import '../src/App.css';
import { Provider } from 'react-redux';
import store from './store/store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <NavbarCom />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />

          </Routes>

        </PersistGate>
      </Provider>

    </>
  )
}

export default App