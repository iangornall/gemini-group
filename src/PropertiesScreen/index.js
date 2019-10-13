import React from 'react';
import moment from 'moment';
import Splash from '../shared/Splash';
import PropertyCard from './PropertyCard';
import Button from '../shared/Button';
import './index.css';
let PropertiesScreen = ({scrollY}) => (
  <div>
    <Splash 
      scrollY={scrollY} 
      background="banner6.jpg"
    />
    <div className="properties-content">
      <h2>Properties</h2>
      <div className="property-cards">
      <PropertyCard 
        image="./assets/39SpanishOakWay.webp"
        address="39 Spanish Oak Way, Dallas, GA 30132, USA"
        price="$2,295/month"
        bedrooms="4"
        bathrooms="3.5"
        size="3,354 square feet"
        date={moment("20190815", "YYYYMMDD").fromNow()}
        link="https://www.zillow.com/homes/39-Spanish-Oak-Way-Dallas,-GA,-30132_rb/"
      />
    </div>
      <Button href="http://nationalpropertyteam.com/properties/">National Property Team</Button>
    </div>
  </div>
)
export default PropertiesScreen;