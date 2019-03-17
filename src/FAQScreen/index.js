import React from 'react';
import Splash from '../shared/Splash';
import Container from '../shared/Container';
import './index.css';
let FAQScreen = ({scrollY}) => (
  <div className="faq-screen">
    <Splash 
      scrollY={scrollY} 
      background="banner5.jpg"
    />
    <Container>
      <h2>FAQs about the Gemini Group ATL’s Rent-to-Own Program for home buyers</h2>
      <details>
        <summary>WHAT ARE THE MINIMUM QUALIFICATIONS TO QUALIFY FOR THE GEMINI GROUP ATL’S RENT-TO-OWN PROGRAM?</summary>
        <p>We require an up-front down payment that will be applied against the purchase price when you do eventually close on the property, so your ability to put some skin in the game is mandatory. Generally, your down payment will be between 3-10% of the purchase price, depending on the home and your personal situation. It will be applied to your purchase price when you go to closing.</p>
        <p>Other than that, a commitment to diligently work with us to convert you from a home-renter to a homebuyer by the end of the lease term is the most important qualification.</p>
        <p>A poor FICO score will NOT disqualify you from our program, so don’t hesitate to consult with us.</p>
      </details>
      <details>
        <summary>CAN I STILL DO YOUR RENT-TO-OWN PROGRAM IF I DON’T QUALIFY?</summary>
        <p>No, unfortunately not. It wouldn’t be fair for us to put you into a home and have you make rent payments if we know you won’t qualify to buy at the end of the rental period.</p>
        <p>Even if you don’t qualify, you can still schedule a free consultation from our partner credit consulting agency here.</p>
        <p>With their help, you may be able to qualify for our rent-to-own program in the future.</p>
      </details>
      <details>
        <summary>HOW DOES MYCREDITTEAM RAISE MY CREDIT SCORE?</summary>
        <p>This will vary from person to person, but you can read more about their process on their FAQs page.</p>
      </details>
      <details>
        <summary>WHAT’S THE COMMITMENT FOR THE CREDIT PLAN?</summary>
        <p>It starts at $199 and a few hours monthly.</p>
      </details>
      <details>
        <summary>DO I HAVE TO PAY ANY FEES OR COMMISSION?</summary>
        <p>Since we aren’t realtors, we don’t charge any commissions or other fees.
      But as with anyone who buys a home, you are required to put 3- 10% down, which will be fully credited to your final purchase price at closing.</p>
        <p>Beyond this, you’ll make regular monthly rent payments and cover the usual costs associated with home ownership.</p>
      </details>
      <details>
        <summary>DO MY RENTAL PAYMENTS COUNT TOWARDS MY HOUSE PAYMENT?</summary>
        <p>No, they do not. But consider it this way - you’re already making rent payments somewhere.
      At least with a rent-to-own home, you know that these payments will pay off down the line and help you secure the home you want today.</p>
      </details>
      <details>
        <summary>WHAT IF I DON’T QUALIFY FOR MY MORTGAGE LOAN AFTER MY LEASE PERIOD FINISHES?</summary>
        <p>This rarely (if ever) happens, and we’ve worked with over 450 buyers since we started doing this. This is because we don’t accept people into the program unless we’re 99.99% sure they’ll qualify for a mortgage loan after the lease period.</p>
        <p>In the unlikely event this occurs, we may be able to extend your lease if we’re confident you need a little more time to qualify for a mortgage loan.</p>
      </details>
      <details>
        <summary>HOW LONG IS THE AVERAGE RENTAL PERIOD?</summary>
        <p>The length of the rental period is based on evaluation from our third-party credit consulting agency and mortgage consultant. But usually, we can bring you to a point where you can qualify to purchase in 12-24 months.</p>
      </details>
      <details>
        <summary>WHO IS THE GEMINI GROUP ATL’S RENT-TO-OWN PROGRAM FOR?</summary>
        <p>This program is for anyone that is part of the 82% of the market who wants to buy a home, but can’t qualify for a mortgage loan today.</p>
        <p>Most importantly of all, this program is for people who are willing to invest the time and energy to get their credit back on track so they can qualify for a loan to become buyers.</p>
        <p>Alternatively, this program is perfect for someone who can qualify for a loan today, but just wants an extra year or two to save for a down payment or get better loan terms, or needs “seasoning” in the eyes of the lender.</p>
      </details>
      <details>
        <summary>WHO ISN’T THE GEMINI GROUP ATL’S RENT-TO-OWN PROGRAM FOR?</summary>
        <p>This program is not for anyone who wants an overnight miracle, or is unwilling to put in the time and effort to fix what’s broken.</p>
      </details>

    </Container>
  </div>
);
export default FAQScreen;