import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './components/StateProvider/Stateprovider';
import reducer, { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
        </BrowserRouter>
  </React.StrictMode>
);
