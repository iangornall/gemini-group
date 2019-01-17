import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import useScrollY from './hooks/useScrollY';
import Header from './Header';
import HomeScreen from './HomeScreen';
import SellScreen from './SellScreen';
import BuyScreen from './BuyScreen';
import ContactScreen from './ContactScreen';
import PropertiesScreen from './PropertiesScreen';
import RecievedScreen from './RecievedScreen';
import LeadsScreen from './LeadsScreen';
import Footer from './Footer';

let App = () => {
  const scrollY = useScrollY();
  return (
    <div className="App">
      <Router>
        <div>
          <Header scrollY={scrollY} />
          <Route exact path="/" render={(routeProps) => (
            <HomeScreen {...routeProps} scrollY={scrollY} />)} 
          />
          <Route path="/sell-a-home" render={(routeProps) => (
            <SellScreen {...routeProps} scrollY={scrollY} />)} />
          <Route path="/buy-a-home" render={(routeProps) => (
            <BuyScreen {...routeProps} scrollY={scrollY} />)} />
          <Route path="/contact" render={(routeProps) => (
            <ContactScreen {...routeProps} scrollY={scrollY} />)} />
          <Route path="/properties" render={(routeProps) => (
            <PropertiesScreen {...routeProps} scrollY={scrollY} />)} />
          <Route path="/recieved" render={(routeProps) => (
            <RecievedScreen {...routeProps} scrollY={scrollY} />)} />
          <Route path="/leads" render={(routeProps) => (
            <LeadsScreen {...routeProps} scrollY={scrollY} />)} />
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;