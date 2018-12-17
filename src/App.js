import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import HomeScreen from './HomeScreen';
import SellScreen from './SellScreen';
import BuyScreen from './BuyScreen';
import ContactScreen from './ContactScreen';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scrollY: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    this.setState(() => ({
      scrollY: window.scrollY
    }));
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header scrollY={this.state.scrollY} />
            <Route exact path="/" render={(routeProps) => (
              <HomeScreen {...routeProps} scrollY={this.state.scrollY} />)} 
            />
            <Route path="/sell-a-home" render={(routeProps) => (
              <SellScreen {...routeProps} scrollY={this.state.scrollY} />)} />
            <Route path="/buy-a-home" render={(routeProps) => (
              <BuyScreen {...routeProps} scrollY={this.state.scrollY} />)} />
            <Route path="/contact" render={(routeProps) => (
              <ContactScreen {...routeProps} scrollY={this.state.scrollY} />)} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}