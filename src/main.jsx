import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Reusable/Header.jsx';
import Footer from './Reusable/Footer.jsx';
import FixedIcon from './Reusable/FixedIcon.jsx';
import "animate.css/animate.compat.css"
import "animate.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <FixedIcon/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
