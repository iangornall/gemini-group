import React from 'react';
import Splash from '../shared/Splash';
import Register from './Register';
import Info from '../shared/Info';
import Hero from '../shared/Hero';
import './index.css';
let HomeScreen = ({scrollY}) => (
  <div style={{position: "relative"}}>
    <Splash 
      scrollY={scrollY} 
      title="Rent to Own"
      subtitle="Do these awesome things"
      buttons={["Do Stuff", "Do Stuff"]}
      background="banner1.jpg"
    />
    <hr class="separator" />
    <Register />
    <Info 
      title="What is Rent to Own?" 
      subtitle="You pay rent and over time you will own your home!" 
      text="We are here to make your dreams come true.  We have a portfolio of wonderful homes to offer you.  To smooth the transition from renting to home ownership, we are willing to set a monthly rental fee for you and after a few short years, you will own your very own home."
      video="assets/how-rent-to-own-works.mp4"
      poster="assets/how-rent-to-own-works.png"
      reverse={false}
    />
    <Hero 
      title="We are great at this!"
      text="We own these homes and care about them and stuff..."
      showButton={true}
      button="Lease to own programs"
      color="rgba(0,111,178,0.7)"
      background="banner2.jpg"
    />
    <Info 
      title="What is Rent to Own?"
      text="We are here to make your dreams come true.  We have a portfolio of wonderful homes to offer you.  To smooth the transition from renting to home ownership, we are willing to set a monthly rental fee for you and after a few short years, you will own your very own home."
      video="assets/how-rent-to-own-works.mp4"
      poster="assets/how-rent-to-own-works.png"
      reverse={true}
    />
    <Hero 
      title="We are great at this!"
      text="We own these homes and care about them and stuff..."
      textColor="#000"
      showButton={true}
      button="Lease to own programs"
      color="rgba(255,255,255,0.7)"
      background="banner3.jpg"
    />
    {/* <main class="main">
      <Articles />
      <NewsletterForm />
    </main> */}
  </div>
);
export default HomeScreen;