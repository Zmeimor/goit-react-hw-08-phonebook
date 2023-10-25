import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//  { store, persistor } from './components/redux/store';
import { store } from './components/redux/store';
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
  // </React.StrictMode>
);
