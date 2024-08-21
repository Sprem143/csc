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
import AdminLogin from './AdminLogin.jsx';
import AdminPage from './AdminPage.jsx';
import Home from './Pages/Home.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    
 <BrowserRouter>
 <Header/>
 <FixedIcon/>
 <Routes>
 
  <Route path='/' element={<App/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/admin' element={<AdminLogin/>}/>
  <Route element={<ProtectedRoute/>}>
  <Route path='/superadmin' element={<AdminLogin/>}/>
  <Route path='/adminpage' element={<AdminPage/>}/>
  </Route>
 </Routes>
 <Footer/>

 </BrowserRouter>


   
  </React.StrictMode>,
)
