import React from 'react';
import Splash from './Splash';
import Register from './Register';
import Info from './Info';
let HomeScreen = ({scrollY}) => (
  <div>
    <Splash scrollY={scrollY} />
    <Register />
    <Info 
      title="What is Rent to Own?" 
      subtitle="You pay rent and over time you will own your home!" 
      text="We are here to make your dreams come true.  We have a portfolio of wonderful homes to offer you.  To smooth the transition from renting to home ownership, we are willing to set a monthly rental fee for you and after a few short years, you will own your very own home."
      video="assets/video.mov"
      reverse={false}
    />
    {/* <main class="main">
      <Articles />
      <NewsletterForm />
    </main> */}
  </div>
);
export default HomeScreen;