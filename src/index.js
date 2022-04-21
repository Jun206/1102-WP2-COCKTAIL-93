import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App_93 from './App_93'
import { AppProvider } from './context'
import About_93 from './pages/About_93'
import Home_93 from './pages/Home_93'
// import App_93 from './App_93'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <App_93 />
    <About_93 />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
