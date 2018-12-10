import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import HomeScreen from './HomeScreen';
import Footer from './Footer';

let App = () => (
  <div className="App">
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={HomeScreen} />
        {/* <Route path="/sell-a-home" component={SellScreen} />
        <Route path="/buy-a-home" component={BuyScreen} />
        <Route path="/contact" component={Contact} /> */}
        <Footer />
      </div>
    </Router>
    {/* 
    <Footer>
      <FooterMenu />
      <QuickConnect />
    </Footer> */}
  </div>
);

export default App;
