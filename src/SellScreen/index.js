import React, { useState } from 'react';
import Splash from '../shared/Splash';
import Container from '../shared/Container';
import Button from '../shared/Button';
import { Player, BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import './index.css';
let SellScreen = ({scrollY}) => {
  const [listPrice, setListPrice] = useState("");
  let handlePriceChange = (event) => setListPrice(event.target.value);
  const [payoff, setPayoff] = useState("");
  let handlePayoffChange = (event) => setPayoff(event.target.value);
  let formatNumber = (num) => parseFloat((num * 1).toFixed(2)).toLocaleString();
  return (
  <div className="sell">
    <Splash 
      scrollY={scrollY} 
      background="banner4.jpg"
    />
    <Container padding="1em 3% 1em 6%">
      <div className="sell-top">
        <p>If your house has been on the market for months with hardly a nibble...</p>
        <p>If you’ve turned to realtors because “that’s just the way you sell a house...”</p>
        <p>If you’re sick of footing the bill for your “Old Home” instead of your “New Home”...</p>
        <p>Or if you’d really love to turn away all those people dropping in to tour your home unannounced who haven’t been pre-qualified as likely buyers...</p>
        <p>Then Gemini Group's Lease Purchase Program may be just the solution for you!</p>
      </div>
      <p style={{textAlign: 'center'} }><Button href='/sellerRegistration' text='Seller Registration' /></p>
      <p className="big-video">
        <Player playsInline poster="assets/whats-a-lease-purchase.png">
          <BigPlayButton position="center" />
          <source src="assets/whats-a-lease-purchase.mp4" type="video/mp4" />
        </Player>
      </p>
      <h2>What IS a Lease Purchase Program?</h2>
      <p>Since over 80% of potential home buyers can’t qualify for a loan today, it can be very difficult for you and your realtor to find someone who can buy your home directly. A Lease Purchase Program (also called rent-to-own) can make this process easier and faster by pulling from a different and larger pool of potential buyers that are ready to buy, but need a bit more time to qualify for home financing.</p>
      <p>With our lease purchase program, you lease your home directly to Gemini Group for a predetermined period of time with a pre-negotiated ultimate purchase price, up to 100% of the market value, locking in the equity in your home. We then install a prequalified buyer who works on improving their credit or saving an additional down payment so they can purchase the home before the lease term is up. Once the tenant/buyer moves in, we take over all responsibilities for the home at that point. We take responsibility for the mortgage, insurance, taxes, maintenance, repairs etc.</p>
      <h2>Are you a Real Estate Agent?</h2>
      <p>No! We aren’t agents or brokers. We are investors who acquire wonderful homes and place qualified tenant-buyers into them. And since we are home buyers and not realtors or brokers you don’t have to worry about paying any commissions or watching your equity being whittled away by the usual buyer discounts etc.</p>
      <h2>Show me the $$$$$</h2>
      <p>This is the best part, in a traditional sale you are generally taking discounts off your target price for realtor fees, discounts to list price, seller paid closing costs etc. In our model, you start with your target price, subtract your current mortgage balance, transfer tax and nominal legal closing costs and that is your check- locked in on the day we sign our Lease Purchase Agreement. Check out the illustration below- and adjust the numbers with yours to see what I mean!</p>
      <div class="table-container">
        <table>
          <tr>
            <th colSpan="2">Rent to Own with Us</th>
          </tr>
          <tr>
            <td>Your List Price</td>
            <td><input onChange={handlePriceChange} type="number" value={listPrice} /></td>
          </tr>
          <tr>
            <td>Total Payoff</td>
            <td><input onChange={handlePayoffChange} type="number" value={payoff} /></td>
          </tr>
          <tr>
            <td>Our Split of Your Equity</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Our Commission</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Our Closing Costs</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Your Equity</td>
            <td>${formatNumber(listPrice - payoff)}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th colSpan="2">Conventional Deal</th>
          </tr>
          <tr>
            <td>List Price</td>
            <td>${formatNumber(listPrice)}</td>
          </tr>
          <tr>
            <td>Total Payoff</td>
            <td>${formatNumber(payoff * 1)}</td>
          </tr>
          <tr>
            <td>Typical Discount (5%)</td>
            <td>${formatNumber((listPrice * 5) / 100)}</td>
          </tr>
          <tr>
            <td>Real Estate Commision (6%)</td>
            <td>${formatNumber((listPrice * 6) / 100)}</td>
          </tr>
          <tr>
            <td>Closing Costs and Other Fees (2.5%)</td>
            <td>${formatNumber((listPrice * 2.5) / 100)}</td>
          </tr>
          <tr>
            <td>Your Equity</td>
            <td>${formatNumber(((listPrice * 86.5) / 100) - payoff)}</td>
          </tr>
        </table>
      </div>
      <br />
      <h2>This sounds too good to be true- “What’s the catch????”</h2>
      <p>While we don’t really consider this a “catch”- if you <strong>need</strong> all your equity <strong>TODAY</strong>- our program is probably not going to be a perfect fit for you (although there are workarounds we can discuss) and some sellers are unclear why they have to wait. Simply put, the wait equals the length of time it takes for our tenant-buyer to qualify for a mortgage loan (which is usually within 12-24 months).</p>
      <p>If you <strong>CAN</strong> wait, there are some definite benefits to doing it this way. Since we work with a large pool of rent-to-own buyers, we can fill your house quickly. Once that happens, we take on full responsibility for your home and you can stop paying for your mortgage, repairs, maintenance, taxes, or anything else when we take over.</p>
      <p>And because we commit to full-market value at the beginning of the lease period, you don’t have to worry about paying commissions like you would with a realtor or watching your anticipated equity disappear through repeated (and frustrating) price reductions while you wait to sell your home. Yes, you may have to wait a little for your money... but you will be making far more from the sale when you arrive at the closing table.</p>
      <br />
      <h2>Here is how Gemini Group’s Lease Purchase Program Works- Step by Step!</h2>
      <h3>1. House Visit + Lease Purchase Agreement</h3>
      <p>Our first step is to meet with you and visit your home. If we are confident your house is a good fit for our program, we will negotiate a lease purchase agreement together.</p>
      <p>The agreement will break down things like your cash out price, length of the rental period, and responsibilities of each party. </p>
      <p>WHAT THIS MEANS FOR YOU:</p>
      <p>You can be confident that you will receive your maximum net proceeds - up to 100% of the fair market value of your home - on or before the lease expiration date. In other words, your profit is locked in from Day 1.</p>
      <h3>2. We find and QUALIFY the perfect tenant buyer to Sub-Lease the home from US</h3>
      <p>We won’t consider a lease purchase candidate for the home unless we are 99.99% confident they will qualify to purchase at the end of the rental period. We won’t accept any buyers who don’t meet the qualifications of a 3rd party credit consultant agency and mortgage broker.</p>
      <p>Once we execute a sub-lease purchase agreement with the buyer, they are required to follow our proven home-renter to home owner plan to prepare for their future purchase.</p>
      <p>WHAT THIS MEANS FOR YOU:</p>
      <p>You don’t have to lose sleep waiting for the perfect buyer- we find them, qualify them and put them in the home on a direct path to home ownership. <strong>And</strong> most importantly we stay “in-the-middle” to make sure you end up at a closing table with a check in hand at the end of your Lease Purchase with Gemini Group.</p>
      <h3>3. Tenant-Buyer Moves in for lease period (and <strong>WE</strong> take over full responsibility for everything)</h3>
      <p>After we finalize the lease purchase agreement with you, and our sub-lease purchase with our pre-qualified buyer, our tenant-buyer moves in and gets to work qualifying for a loan that will let them purchase the house. We work closely with them to get them across the finish line within the lease term.</p>
      <p>During this lease term, we take on 100% responsibility as the tenant-buyer’s landlord. We will handle your mortgage payments, repairs, maintenance, and anything else that comes up. All you have to do is wait for a closing date and collect your proceeds at settlement.</p>
      <p>WHAT THIS MEANS FOR YOU:</p>
      <p>As soon as we have placed a tenant-buyer (which can generally take 30-90 days or less), all responsibility for the house is out of your hands and into ours.</p>
      <h3>4. Renter becomes a Buyer and you close out on your home</h3>
      <p>On or before the end of the lease date, our carefully pre-qualified buyer (who has been following our home-renter to homeowner plan) will qualify for their mortgage loan. At that point, they will purchase your home.</p>
      <p>WHAT THIS MEANS FOR YOU:</p>
      <p>You receive full market value for your home, and you’ve just helped a family become happy homeowners.</p>
    </Container>
  </div>
)};
export default SellScreen;