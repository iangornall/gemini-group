import React from 'react';
import Splash from '../shared/Splash';
import submitMessage from '../shared/submitMessage';
import {withRouter} from 'react-router-dom';
import './index.css';
let SellerRegistrationScreen = ({history, scrollY}) => (
  <div>
    <Splash 
        scrollY={scrollY} 
        background="banner5.jpg"
      />
    <div className="form seller-registration">
      <h2 className="form-title">Seller Registration</h2>
      <div className="form-subtitle">
        <hr />
        <h3>Get in Touch!</h3>
        <hr />
      </div>
      <form onSubmit={submitMessage('https://secure.globiflow.com/catch/33b39wd4m57c5h5', history)}>
        <label>
          <div className="form-label">Seller Name *</div>
          <input className="form-input" type="text" name="seller-name" required />
        </label>
        <label>
          <div className="form-label">Property Address</div>
          <input className="form-input" type="text" name="property-address" required />
        </label>
        <label>
          <div className="form-label" required>Email *</div>
          <input className="form-input" type="email" name="email" required />
        </label>
        <label>
          <div className="form-label">Phone Number</div>
          <input className="form-input" type="number" name="phone" />
        </label>
        <label>
          <div className="form-label">How much are you asking?</div>
          <input className="form-input" type="number" name="asking-price" />
        </label>
        <label>
          <div className="form-label">How did you arrive at this price?</div>
          <input className="form-input" type="text" name="price-reasoning" />
        </label>
        <label>
          <div className="form-label">Is this currently listed with a realtor?</div>
          <input className="form-input" type="text" name="realtor" />
        </label>
        <label>
          <div className="form-label">Does this house need any work?</div>
          <input className="form-input" type="text" name="work" />
        </label>
        <label>
          <div className="form-label">Any mortgage(s)?</div>
          <input className="form-input" type="text" name="mortgages" />
        </label>
        <label>
          <div className="form-label">Why are you selling?</div>
          <input className="form-input" type="text" name="sell-reason" />
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
          <div className="form-label">When do you plan to move?</div>
          <input className="form-input" type="text" name="move-time" />
        </label>
        <label>
          <div className="form-label">Anything else we should know?</div>
          <input className="form-input" type="text" name="other" />
        </label>
        <input type="hidden" name="form" value="seller-registration" />
        <input className="submit-button mt1" type="submit" value="Submit" />
      </form>
    </div>
  </div>
);
export default withRouter(SellerRegistrationScreen);