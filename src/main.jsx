import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Reusable/Header.jsx';
import Footer from './Reusable/Footer.jsx';
import FixedIcon from './Reusable/FixedIcon.jsx';
import "animate.css/animate.compat.css"
import "animate.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './Admin/AdminHome.jsx';
import AdminLogin from './Admin/AdminLogin.jsx';
import SadminHome from './Admin/SadminHome.jsx';
import SadminLogin from './Admin/SadminLogin.jsx'

import Home from './Pages/Home.jsx';
import AdminProtector from './Protector/AdminProtector.jsx';
import SuperadminProtector from './Protector/SuperadminProtector.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <BrowserRouter>
      <Header />
      {/* <FixedIcon /> */}
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/superadminlogin' element={<SadminLogin />} />
        <Route element={<AdminProtector/>}>
        <Route path='/adminhome' element={<AdminHome />} />
        </Route>
        <Route element={<SuperadminProtector />}>
        <Route path='/superadminhome' element={<SadminHome />} />
        </Route>

      </Routes>
      <Footer />

    </BrowserRouter>



  </React.StrictMode>,
)
