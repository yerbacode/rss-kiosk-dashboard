import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RssDataProvider } from './context/RssContext';
import { WallpaperDataProvider } from './context/WallpaperContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <WallpaperDataProvider>
      <RssDataProvider>
      <App />
      </RssDataProvider>
    </WallpaperDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();