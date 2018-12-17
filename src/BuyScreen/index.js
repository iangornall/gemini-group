import React from 'react';
import Splash from '../shared/Splash';
import Info from '../shared/Info';
import Hero from '../shared/Hero';
import Card from '../shared/Card';
import './index.css';
let BuyScreen = ({scrollY}) => (
  <div class="buy-screen">
    <Splash 
      scrollY={scrollY} 
      background="banner5.jpg"
    />
    <Info 
      title="How Rent to Own Works" 
      text={["I find myself answering this question numerous times per day so I figured it’s way over due that I post an explanation.  If you prefer to listen to the audio a few times simply dial 855.66PREFO (77336), X 824.  There is a video post before this one on the blog as well.",
      "Approximately 82% of the market cannot qualify TODAY for financing and typically would need to improve their credit to do so.  Alternatively, other buyers with good credit are looking for a way to buy now while they save more instead of renting while they save."]}
      video="assets/how-rent-to-own-works.mp4"
      poster="assets/how-rent-to-own-works.png"
      reverse={false}
    />
    <Info 
      title="How Rent to Own Works" 
      text={["I find myself answering this question numerous times per day so I figured it’s way over due that I post an explanation.  If you prefer to listen to the audio a few times simply dial 855.66PREFO (77336), X 824.  There is a video post before this one on the blog as well.",
      "Approximately 82% of the market cannot qualify TODAY for financing and typically would need to improve their credit to do so.  Alternatively, other buyers with good credit are looking for a way to buy now while they save more instead of renting while they save."]}
      video="assets/how-rent-to-own-works.mp4"
      poster="assets/how-rent-to-own-works.png"
      reverse={true}
    />
    <Hero 
      title="Credit Consulting Services"
      text="During the course of the lease, you can use our credit consulting service we will refer you to.  Whether you lease purchase one of our homes or not, you can certainly use them.  They will give you a free consulting session and you can decide which course of action to take with them."
      showButton={true}
      button="My Credit Team"
      color="rgba(0,111,178,0.7)"
      background="banner2.jpg"
    />
    <div class="two-column">
      <Info 
        title="MyCreditTeam.Com" 
        text={["Sometime between 6 months and 24 months they can typically get you in great shape for your own loan.  The time frame on our lease purchase properties ranges from 24 months to 10 years so you’re never rushed and we’ll help you purchase on your own eventually.",
        "If you have not seen one of our properties yet, your next step would be to go ahead and schedule a viewing.  Some are on lock boxes and you just need to get the instructions from us and others require private or group viewing with an owner.",
        "All listings are on www.PrePropertySolutions.com and they only stay up while available and typically don’t last long!"]}
      />
      <Info 
        title="MyCreditTeam.Com" 
        text={["Sometime between 6 months and 24 months they can typically get you in great shape for your own loan.  The time frame on our lease purchase properties ranges from 24 months to 10 years so you’re never rushed and we’ll help you purchase on your own eventually.",
        "If you have not seen one of our properties yet, your next step would be to go ahead and schedule a viewing.  Some are on lock boxes and you just need to get the instructions from us and others require private or group viewing with an owner.",
        "All listings are on www.PrePropertySolutions.com and they only stay up while available and typically don’t last long!"]}
      />
    </div>
    <div class="buy-text">Steps 1-3</div>
    <div class="three-column">
      <Card
        video="assets/how-rent-to-own-works.mp4"
        poster="assets/how-rent-to-own-works.png"
        text="Whether you are buying a home for the first time or are an experienced homebuyer, we can help. We’re an active real estate investment company, so we are knowledgeable regarding the market. We may have just the property you are looking for, or we can try to find it."
      />
      <Card
        video="assets/how-rent-to-own-works.mp4"
        poster="assets/how-rent-to-own-works.png"
        text="Whether you are buying a home for the first time or are an experienced homebuyer, we can help. We’re an active real estate investment company, so we are knowledgeable regarding the market. We may have just the property you are looking for, or we can try to find it."
      />
      <Card
        video="assets/how-rent-to-own-works.mp4"
        poster="assets/how-rent-to-own-works.png"
        text="Whether you are buying a home for the first time or are an experienced homebuyer, we can help. We’re an active real estate investment company, so we are knowledgeable regarding the market. We may have just the property you are looking for, or we can try to find it."
      />
    </div>
  </div>
);
export default BuyScreen;