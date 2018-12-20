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
      title="Rent to Own Homes &amp; Investors"
      subtitle="Buying or Selling Your House Has Never Been This Easy!"
      buttons={[
        {text: "Our Properties",
        href: '/properties'}, 
        {text: "Lease to Own",
        href: '/buy-a-home'}]}
      background="banner1.jpg"
    />
    <hr className="separator" />
    <Register />
    <Info 
      title="Rent To Own Homes &amp; Investors" 
      subtitle="Buying a Home or Selling Your House Has Never Been This Easy!" 
      text="Owning a home is truly the American Dream. Buying a home can be a difficult process, especially for those with poor credit, no credit and/or a limited amount to invest. A Lease to Own, also known as Rent to Own, Option may be just for you! Based on your individual criteria, we can be very creative with financing and fit it to your needs. We are not loan brokers, bankers, real estate agents or selling homes for someone else, we are the owners or we have a legal equitable interest in the property."
      button={{href: "/properties", text: "View Our Properties"}}
      video="assets/how-rent-to-own-works.mp4"
      poster="assets/how-rent-to-own-works.png"
      reverse={false}
    />
    <Hero 
      title="Rent To Own Real Estate Specialists"
      text="We are not real estate agents, bankers or loan brokers
      who get paid to find you a loan. We are the owner of some lovely homes that are available
      for purchase in various ways including lease to own."
      button={{href: "/buy-a-home", text: "Lease to own programs"}}
      color="rgba(0,111,178,0.7)"
      background="banner2.jpg"
    />
    <Info 
      title="Lease To Own Homes Specialists"
      text="We are not Realtors who are selling someone else’s homes, bankers or loan brokers who get paid to find you a loan. We are actually the owner of some lovely homes that are available for purchase in various ways including lease to own. Since we own the homes, many times (depending on your circumstances) we are willing to finance all or part of the purchase ourselves or lease to own them to you. All the normal rules concerning credit, debt ratio and proof of income are thrown out the window. Since we own the homes, we can be very creative with the financing and structure it to fit your needs."
      video="assets/what-if-i-dont-have-a-mortgage.mp4"
      poster="assets/what-if-i-dont-have-a-mortgage.png"
      reverse={true}
    />
    <Hero 
      title="NO CREDIT Or BAD CREDIT?"
      text="If you are truly interested in owning a home of your own, you can be in a home in less than 30 days with our lease to own program.

      Or, if you don’t see a home you like in our current inventory, let us know and we will place your name on our VIP list for a home that meets your needs. We are located in the Atlanta, GA Metro area and invest in Rent to Own Properties throughout the United States."
      textColor="#000"
      button={{href: "/buy-a-home", text: "Learn More"}}
      color="rgba(255,255,255,0.9)"
      background="banner3.jpg"
    />
  </div>
);
export default HomeScreen;