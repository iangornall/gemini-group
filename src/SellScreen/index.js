import React from 'react';
import Splash from '../shared/Splash';
import Info from '../shared/Info';
import ContactForm from '../shared/ContactForm';
import './index.css';
let SellScreen = ({scrollY}) => (
  <div class="sell">
    <Splash 
      scrollY={scrollY} 
      background="banner4.jpg"
    />
    <div class="sell-top">
      <Info
        bigtitle={true}
        title="Sell Your House"
        text={["We buy properties in any condition or situation. We are not real estate agents, so we don’t want to list your house. We want to buy it.  We can advise you on the best approach to sell your home quickly within your unique situation. We buy houses in any condition, regardless why they are for sale.",
        "We are active property buyers. If your property meets our needs, we would like to buy it soon. We are not afraid of properties that require repairs. Regardless of the condition of your house or your current situation, we would like to learn more about your property.",
        "We are also well networked with other active buyers. This means we can help with properties that don’t match our current needs. There is no risk and no obligation on your part so please tell us about your property."]}
      />
      <ContactForm />
    </div>
    <div class="sell-bottom">
    <Info
      title="Sell Your House"
      text={["We buy properties in any condition or situation. We are not real estate agents, so we don’t want to list your house. We want to buy it.  We can advise you on the best approach to sell your home quickly within your unique situation. We buy houses in any condition, regardless why they are for sale.",
      "We are active property buyers. If your property meets our needs, we would like to buy it soon. We are not afraid of properties that require repairs. Regardless of the condition of your house or your current situation, we would like to learn more about your property.",
      "We are also well networked with other active buyers. This means we can help with properties that don’t match our current needs. There is no risk and no obligation on your part so please tell us about your property."]}
    />
    <Info
      title="Sell Your House"
      text={["We buy properties in any condition or situation. We are not real estate agents, so we don’t want to list your house. We want to buy it.  We can advise you on the best approach to sell your home quickly within your unique situation. We buy houses in any condition, regardless why they are for sale.",
      "We are active property buyers. If your property meets our needs, we would like to buy it soon. We are not afraid of properties that require repairs. Regardless of the condition of your house or your current situation, we would like to learn more about your property.",
      "We are also well networked with other active buyers. This means we can help with properties that don’t match our current needs. There is no risk and no obligation on your part so please tell us about your property."]}
    />
    <Info
      title="Sell Your House"
      text={["We buy properties in any condition or situation. We are not real estate agents, so we don’t want to list your house. We want to buy it.  We can advise you on the best approach to sell your home quickly within your unique situation. We buy houses in any condition, regardless why they are for sale.",
      "We are active property buyers. If your property meets our needs, we would like to buy it soon. We are not afraid of properties that require repairs. Regardless of the condition of your house or your current situation, we would like to learn more about your property.",
      "We are also well networked with other active buyers. This means we can help with properties that don’t match our current needs. There is no risk and no obligation on your part so please tell us about your property."]}
    />
    <Info
      title="Sell Your House"
      text={["We buy properties in any condition or situation. We are not real estate agents, so we don’t want to list your house. We want to buy it.  We can advise you on the best approach to sell your home quickly within your unique situation. We buy houses in any condition, regardless why they are for sale.",
      "We are active property buyers. If your property meets our needs, we would like to buy it soon. We are not afraid of properties that require repairs. Regardless of the condition of your house or your current situation, we would like to learn more about your property.",
      "We are also well networked with other active buyers. This means we can help with properties that don’t match our current needs. There is no risk and no obligation on your part so please tell us about your property."]}
    />
    </div>
  </div>
);
export default SellScreen;