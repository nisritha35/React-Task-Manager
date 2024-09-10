import TodosContextProvider from './components/contexts/TodosContextProvider.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <TodosContextProvider>
           <App/>
      </TodosContextProvider>
      
);




