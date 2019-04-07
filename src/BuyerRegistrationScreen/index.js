import React from 'react';
import Splash from '../shared/Splash';
import submitMessage from '../shared/submitMessage';
import {withRouter} from 'react-router-dom';
import './index.css'
let BuyerRegistrationScreen = ({history, scrollY}) => (
  <div>
    <Splash 
        scrollY={scrollY} 
        background="banner5.jpg"
      />
    <div className="form buyer-registration">
      <h2 className="form-title">Buyer Registration</h2>
      <div className="form-subtitle">
        <hr />
        <h3>Be the first to know about new listings!</h3>
        <hr />
      </div>
      <form onSubmit={submitMessage('https://secure.globiflow.com/catch/646l9rnwve539b9', history)}>
        <label>
          <div className="form-label">First Name *</div>
          <input className="form-input" type="text" name="first-name" required />
        </label>
        <label>
          <div className="form-label">Last Name *</div>
          <input className="form-input" type="text" name="last-name" required />
        </label>
        <label>
          <div className="form-label" required>Email</div>
          <input className="form-input" type="email" name="email" />
        </label>
        <label>
          <div className="form-label">Phone Number</div>
          <input className="form-input" type="number" name="phone" />
        </label>
        <label>
          <div className="form-label">How much do you have for a down payment today?</div>
          <input className="form-input" type="number" name="down-payment" />
        </label>
        <label>
          <div className="form-label">What source(s) is your down payment coming from?</div>
          <select className="form-input" name="down-payment-source">
            <option value="">Please select one</option>
            <option value="Cash on Hand">Cash on Hand</option>
            <option value="Borrowing from Friends or Family?">Borrowing from Friends or Family?</option>
            <option value="Tax Refunds">Tax Refunds</option>
            <option value="Equity in other homes">Equity in other homes</option>
            <option value="Bonuses">Bonuses</option>
            <option value="Future Settlements">Future Settlements</option>
            <option value="IRA">IRA</option>
          </select>
        </label>
        <label>
          <div className="form-label">What price range are you looking for?</div>
          <select className="form-input" name="price-range">
            <option value="">Please select one</option>
            <option value="$250000-$500000">$250,000-$500,000</option>
            <option value="$500000-$750000">$500,000-$750,000</option>
            <option value="$750000-$1000000">$750,000-$1,000,000</option>
            <option value="$10000000+">$1,000,000+</option>
          </select>
        </label>
        <label>
          <div className="form-label">What is the maximum monthly payment you can afford?</div>
          <input className="form-input" type="number" name="max-monthly-payment" />
        </label>
        <label>
          <div className="form-label">What area do you prefer to live in? (Countries, Cities or Towns)</div>
          <input className="form-input" type="text" name="area" />
        </label>
        <label>
          <div className="form-label">How many bedrooms?</div>
          <input className="form-input" type="number" name="bedrooms" />
        </label>
        <label>
          <div className="form-label">How many bathrooms?</div>
          <input className="form-input" type="number" name="bathrooms" />
        </label>
        <label>
          <div className="form-label">How many square feet?</div>
          <input className="form-input" type="number" name="square-feet" />
        </label>
        <label>
          <div className="form-label">What is your credit rating?</div>
          <select className="form-input" name="credit-rating"><option value="">Please select one</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </label>
        <label>
          <div className="form-label">When would you like to move?</div>
          <input className="form-input" type="text" name="move-time" />
        </label>
        <label>
          <div className="form-label">What's most important to you?</div>
          <input className="form-input" type="text" name="important" />
        </label>
        <label>
          <div className="form-label">How did you hear about us?</div>
          <input className="form-input" type="text" name="referral" />
        </label>
        <input type="hidden" name="form" value="buyer-registration" />
        <input className="submit-button mt1" type="submit" value="Submit" />
      </form>
    </div>
  </div>
);
export default withRouter(BuyerRegistrationScreen);