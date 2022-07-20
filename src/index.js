import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import TransactionStore from './store/TransactionStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      transactionStore: new TransactionStore()
    }}>
      <App />
    </Context.Provider>  
);

