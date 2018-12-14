import React from 'react';
import Splash from './Splash';
import Register from './Register';
import Info from './Info';
import Hero from './Hero';
let HomeScreen = ({scrollY}) => (
  <div style={{position: "relative"}}>
    <Splash scrollY={scrollY} />
    <Register />
    <Info 
      title="What is Rent to Own?" 
      subtitle="You pay rent and over time you will own your home!" 
      text="We are here to make your dreams come true.  We have a portfolio of wonderful homes to offer you.  To smooth the transition from renting to home ownership, we are willing to set a monthly rental fee for you and after a few short years, you will own your very own home."
      video="./assets/how-rent-to-own-works.mp4"
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
      video="./assets/how-rent-to-own-works.mp4"
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