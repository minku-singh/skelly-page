import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import SubHeader from './SubHeader/SubHeader';
import Footer from './Footer/Footer';
import Main from './Main/Main.js';
import Login from './Login/Login';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <SubHeader />
        <Routes>
          <Route exact path = "/" element = {<Main/>}/>
          <Route path = "/login" element = {<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
