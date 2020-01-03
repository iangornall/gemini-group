import React from 'react';
import Splash from '../shared/Splash';
import Register from './Register';
import Container from '../shared/Container';
import { Player, BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import './index.css';
let HomeScreen = ({scrollY}) => (
  <div style={{position: "relative"}}>
    <Splash 
      scrollY={scrollY} 
      title="Rent to Own Homes &amp; Investors"
      subtitle="Buying or Selling Your House Has Never Been This Easy!"
      // buttons={[
      //   {text: "Our Properties",
      //   href: '/properties'}, 
      //   {text: "Lease to Own",
      //   href: '/buy-a-home'}]}
      background="banner1.jpg"
    />
    <hr className="separator" />
    <Register />
    <Container>
      <h2>Welcome to Gemini Group!</h2>
      <p>If you are on this website, it is because you are either trying to sell or buy a home.</p> 
      <p><em>While we are happy to pay cash for homes with a quick close, that is normally with a steep discount and we find MOST of the sellers we buy from would prefer to get FULL MARKET PRICE for their home without taking a discount."</em></p>
      <h3>So- why are YOU here???</h3>
      <h4>Because you’re trying to sell?</h4>
      <p>Are you sick of disappointing calls from your realtor with much-too-low offers or putting your life on hold for yet another unannounced home tour and/or unproductive Open House?</p>
      <h4>Or are you trying to buy a home?</h4>
      <p>Are you discouraged by the struggle to qualify for a mortgage loan (even if you know you can afford the monthly payments), feel stuck renting in a place where you must follow the whims of your landlord, or wonder if you’ll ever have a place that you and your family can truly call your own?</p>
      <h3>If you fall into either camp, read on... there is HOPE!</h3>
      <p>Buying and selling homes on terms (ie Lease Purchase or Owner Financing) has been around for decades. In 2018 Gemini Group’s founder became part of a national group of investors who focus on providing solutions that help home sellers <strong>and</strong> home buyers at the same time.</p>
      <p>Thus, Gemini Group was created to serve the needs of both parties in the Atlanta metropolitan area and surrounding markets.</p>
      <p><strong>With our 3-step Lease Purchase Program for sellers and Lease to Own Program for buyers, we help sellers sell their homes and buyers get into a home with a simple and effective solution that helps both sides at once.</strong></p>
      <p>So whether you’re a seller who needs to get your home sold and can’t keep lowering your price, or you’re a buyer who has been turned down for a mortgage loan but still wants to get into your dream home, Gemini Group can help!</p>
      <p style={{width: '80%', margin: '0 auto'}}>
        <Player playsInline poster="assets/how-rent-to-own-works.png">
          <BigPlayButton position="center" />
          <source src="assets/how-rent-to-own-works.mp4" type="video/mp4" />
        </Player>
      </p>
      <h3>NOPE! WE ARE NOT REALTORS!</h3>
      <p>We are real estate investors who buy and sell homes throughout the Atlanta metropolitan area. What this means is that we contract to acquire homes each month from home sellers who are either struggling to sell their homes or have become disenchanted with the traditional process, and then we install a prequalified lease-to-own buyer in them who we work with directly to qualify for their mortgage loan.</p>
      <h3>So...... If you are a home seller who works with us on terms...</h3>
      <p>...you won’t have to pay realtor fees or a commission.</p>
      <p>...you will sell at full market value and lock your price in today.</p>
      <p>...you will be able to move on with your life plans, knowing you won’t be writing any more checks to take care of the property, instead you will just wait a short time to RECEIVE a BIG check to get you cashed out at FULL VALUE!</p>
      <h3>And... if you are a home buyer who works with us...</h3>
      <p>...you can still move into your dream home, even if you can’t qualify for a loan today!</p>
      <p>...you will lock in your price today for a purchase in 12-24 months.</p>
      <p>...you will receive direct guidance and credit consulting to ensure you accomplish your goal of homeownership!</p>
      <br />
      <h2>Our Story</h2>
      <p>Gemini Group was founded by Matney Gornall, a banker with 15+ years and over $1 Billion of deal transaction volume doing creative financing transactions, when he saw the opportunity to bring that creativity to the lives of disillusioned home buyers and sellers.</p>
      <p>Matney has real estate in his blood, with a grandfather who was a realtor in the Florida market for many years after retiring as a Colonel in the US Air Force and a father who has bought and sold 1000s of acres of land in the north Georgia market.</p>
      <p>We cover the larger Atlanta Metropolitan and surrounding area and collectively as part of the National Property Team have completed 450+ of these transactions around the country</p>
    </Container>
  </div>
);
export default HomeScreen;