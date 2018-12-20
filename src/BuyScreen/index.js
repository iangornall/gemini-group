import React from 'react';
import Splash from '../shared/Splash';
import Info from '../shared/Info';
import Hero from '../shared/Hero';
import './index.css';
let BuyScreen = ({scrollY}) => (
  <div className="buy-screen">
    <Splash 
      scrollY={scrollY} 
      background="banner5.jpg"
    />
    <Info 
      title="How Rent to Own Works" 
      text={["I find myself answering this question numerous times per day so I figured it's way over due that I post an explanation.", "Approximately 82% of the market cannot qualify TODAY for financing and typically would need to improve their credit to do so.  Alternatively, other buyers with good credit are looking for a way to buy now while they save more instead of renting while they save."]}
      video="assets/how-rent-to-own-works.mp4"
      poster="assets/how-rent-to-own-works.png"
      reverse={false}
    />
    <Info 
      title="Equity Enhancement Program" 
      text={["We offer lease purchase (rent to own) properties only – no straight rent.  All properties will require 3%-10% down and that is credited against your purchase price.  You then pay a monthly lease payment.  Some homes feature a small amount of that monthly also crediting the price and some do not.  Some homes also feature our Equity Enhancement Program.  "]}
      video="assets/equity-enhancement-program.mp4"
      poster="assets/equity-enhancement-program.png"
      reverse={true}
    />
    <Hero 
      title="Credit Consulting Services"
      text="During the course of the lease, you can use our credit consulting service we will refer you to.  Whether you lease purchase one of our homes or not, you can certainly use them.  They will give you a free consulting session and you can decide which course of action to take with them."
      showButton={true}
      button={{href: "http://www.mycreditteam.com/", text: "MyCreditTeam.com"}}
      color="rgba(0,111,178,0.7)"
      background="banner2.jpg"
    />
    <Info 
      title="My Credit Team" 
      text={["Sometime between 6 months and 24 months they can typically get you in great shape for your own loan.  The time frame on our lease purchase properties ranges from 24 months to 10 years so you’re never rushed and we’ll help you purchase on your own eventually.",
      "If you have not seen one of our properties yet, your next step would be to go ahead and schedule a viewing.  Some are on lock boxes and you just need to get the instructions from us and others require private or group viewing with an owner."]}
    />
    <Info 
      title="Real Estate Investors" 
      text={["We can help you find a great deal on investment property or a personal residence. Let us be your first choice when looking for properties, contractors, attorneys, agents, hard money, financing, or any other real estate need. We know the business and can offer immediate help."]}
    />
  </div>
);
export default BuyScreen;