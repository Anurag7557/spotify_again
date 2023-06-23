import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/context/Auth';
import { SongProvider } from './components/context/Song';
import { PlayListsProvider } from './components/context/PlayLists';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <AuthProvider>
  <PlayListsProvider>
  <SongProvider>
    <App />
  </SongProvider>
  </PlayListsProvider>
  </AuthProvider>
 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
