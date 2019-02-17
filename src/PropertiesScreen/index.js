import React from 'react';
import useData from '../hooks/useData';
import Splash from '../shared/Splash';
import PropertyCard from './PropertyCard';
import './index.css';
let PropertiesScreen = ({scrollY}) => {
  let getData = async () => {
    let response = await fetch("http://www.globiflow.com/podiofeed.php?c=11993&a=227194&f=3114");
    let data = await response.json();
    return data;
  }
  let data = useData(getData);
  return (
  <div>
    <Splash 
      scrollY={scrollY} 
      background="banner6.jpg"
    />
    <div className="properties-content">
      <h2>“All Sold Out!”</h2>
      <h3>Come back soon for new properties!</h3>
      {/* {data.map(data => (
        <div>{data.address}</div>
      ))}
      <div></div>
    </div>
    <div className="property-cards">
      <PropertyCard 
        image="./assets/banner1.jpg"
        address="6104 N Spruce Ave, Kansas City, MO 64119, USA"
        price="$7250"
        bedrooms="4"
        bathrooms="3"
        size="2900"
        date="2 weeks ago"
      />
      <PropertyCard 
        image="./assets/banner1.jpg"
        address="6104 N Spruce Ave, Kansas City, MO 64119, USA"
        price="$7250"
        bedrooms="4"
        bathrooms="3"
        size="2900"
        date="2 weeks ago"
      />
      <PropertyCard 
        image="./assets/banner1.jpg"
        address="6104 N Spruce Ave, Kansas City, MO 64119, USA"
        price="$7250"
        bedrooms="4"
        bathrooms="3"
        size="2900"
        date="2 weeks ago"
      />
    </div> */}
    
  </div>
)};
export default PropertiesScreen;