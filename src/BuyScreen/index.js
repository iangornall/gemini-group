import React from 'react';
import Splash from '../shared/Splash';
import Container from '../shared/Container';
import Button from '../shared/Button';
import { Player, BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import './index.css';
let BuyScreen = ({scrollY}) => (
  <div className="buy-screen">
    <Splash 
      scrollY={scrollY} 
      background="banner5.jpg"
    />
    <Container>
      <p>Are you able to afford a home and make the monthly payments... but have STILL been turned down for a mortgage to buy your dream home?</p>
      <p>You’re not alone. Unfortunately, a whopping 82% of Americans today can’t qualify for a mortgage loan or any kind of home financing today (a National statistic).</p>
      <p>If you’re one of the 82% (and if you’re been looking at rent-to-own listings, you probably are), maybe you think you’re relegated to renter status for life...</p>
      <p>Stuck renting a place where you must follow the whims of your landlord (including surprise rent hikes &amp; selling their houses out from under you)…</p>
      <p>Stuck renting a place that you and your family can’t truly call your own…</p>
      <p>If this sounds like you, then keep reading to see if Gemini Group’s Rent-To-Own Program is right for you!</p>
      <p style={{textAlign: 'center'} }><Button href='/buyerRegistration' text='Buyer Registration' /></p>
      <h3>A PROVEN, STEP-BY-STEP RENT-TO-OWN PROGRAM THAT’S TURNED 450+ HOME-RENTERS ACROSS THE COUNTRY INTO HOMEOWNERS</h3>
      <p className="big-video">
        <Player playsInline poster="assets/how-rent-to-own-works.png">
          <BigPlayButton position="center" />
          <source src="assets/how-rent-to-own-works.mp4" type="video/mp4" />
        </Player>
      </p>
      <p>Many home buyers who choose the rent-to-own route are excited when they’re given a chance to move into a home.</p>
      <p>….until they quickly realize they don’t know exactly what they need to do to make sure they actually get that loan to buy.  </p>
      <p>If you qualify for our rent-to-own program, we won’t just put you in a house and leave you to your own devices in the hope you’ll be approved for a loan. </p>
      <p>Instead, Gemini Group’s Rent-to-Own Program makes sure you’re supported every step of the way so you can successfully cross the finish line to homeownership.</p>
      <p>During your rental period, you’ll work directly with our third party credit and mortgage loan consultants. With their help, you’ll create a step-by-step plan that tells you exactly what you need to do to raise your credit enough to qualify for your mortgage loan….and finally be able to own the house of your dreams.</p>
      <div className='step-container'>
        <div>
          <p className="step-number">STEP 1: </p>
        </div>
        <div className='step-cell'>
          <p>If you’re interested in one of our properties, schedule a free “get me into my dream home” consultation call with our team.  </p>
          <p>Then, we’ll reach out to our third party credit consulting agency and mortgage lender/advisor to have them consult with you and see if you qualify for our rent-to-own program. </p>
          <p>Please note: We only take people who are willing to put in the work and follow a credit repair plan to get into a home. If we have any doubts about your commitment to the plan or have doubts that you’ll qualify for a mortgage loan at the end of the rental period even after following the plan, we regretfully won’t accept you into our program. </p>
        </div>
        <div className='step-cell'>
          <p>WHAT THIS MEANS FOR YOU: </p>
          <p>The LAST thing we want is to have you paying rent during the rent-to-own program if we know you won’t be able buy at the end of the lease. Our company mission is to put you squarely on the path to homeownership, and it would violate everything we stand for to accept your payments if we doubt in your ability to qualify for a mortgage loan.</p>
          <p>This does not mean we won’t accept you if you have a low credit score. What it means is that we must know you’re willing to put some time and energy into raising your credit profile. And that it’s realistic for you to raise it sufficiently during the lease period, as pre-determined by our third-party credit consulting agency and mortgage lender/consultant.</p>
        </div>
      </div>
      <div className='step-container'>
        <div>
          <p className="step-number">STEP 2: </p>
        </div>
        <div className='step-cell'>
          <p>Once we’re confident that following Gemini Group’s Rent-to-Own Program will get you qualified for a mortgage loan after the lease period, we’ll draft up a lease-purchase agreement.   </p>
          <p>During the lease period, we’ll be your landlord. That means you’ll be paying rent directly to us.</p>
          <p>Usually, the lease specifies a 2-year term (or longer if you’ll need more time), but your option to purchase can be triggered at any time once you get a loan commitment and can go to closing.  </p>
        </div>
        <div className='step-cell'>
          <p>WHAT THIS MEANS FOR YOU: </p>
          <p>Usually, the lease specifies a 2-year term, but your option to purchase can be triggered at any time in that two years once you get a loan commitment and can go to closing.  </p>
        </div>
      </div>
      <div className='step-container'>
        <div>
          <p className="step-number">STEP 3: </p>
        </div>
        <div className='step-cell'>
          <p>Once you’re in your new rent-to-own home, you follow the plan put in place by our partner credit consulting agency, My Credit Team. </p>
          <p>Working with them will require a small fee and a few hours monthly from you. We mention this upfront because we won’t accept anyone who doesn’t commit to crossing that line from home renter to homeowner.  </p>
          <p>Altogether, My Credit Team has helped more than 3,000 people transition from home renters to qualified home buyers.  </p>
        </div>
        <div className='step-cell'>
          <p>WHAT THIS MEANS FOR YOU: </p>
          <p>You can learn more about how they help rent-to-own home buyers and schedule a free credit consultation call here.   </p>
        </div>
      </div>
      <div className='step-container'>
        <div>
          <p className="step-number">STEP 4: </p>
        </div>
        <div className='step-cell'>
          <p>if you’ve followed the credit repair plan, you should qualify for a mortgage loan on or before the end of your lease term.</p>
          <p>Once you’ve been approved, you close on your new home with the price that was locked-in for you when you signed a lease purchase agreement with us.</p>
        </div>
        <div className='step-cell'>
          <p>PLEASE NOTE:</p>
          <p>If you have been following your credit plan throughout the lease period and still don’t qualify for the loan, we’ll work with you and cover 6 additional months of credit consulting free of charge.</p>
        </div>
      </div>
      <div className="video-container">
        <div className="video">
          <Player playsInline poster="assets/getting-into-a-home-with-0-down.png">
            <BigPlayButton position="center" />
            <source src="assets/getting-into-a-home-with-0-down.mp4" type="video/mp4" />
          </Player>
        </div>
        <div className="video">
          <Player playsInline poster="assets/what-expenses-can-i-expect.png">
            <BigPlayButton position="center" />
            <source src="assets/what-expenses-can-i-expect.mp4" type="video/mp4" />
          </Player>
        </div>
        <div className="video">
          <Player playsInline poster="assets/equity-enhancement-program.png">
            <BigPlayButton position="center" />
            <source src="assets/equity-enhancement-program.mp4" type="video/mp4" />
          </Player>
        </div>
      </div>
    </Container>
  </div>
);
export default BuyScreen;