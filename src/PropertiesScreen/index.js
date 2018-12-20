import React from 'react';
import Splash from '../shared/Splash';
import './index.css';
let PropertiesScreen = ({scrollY}) => (
  <div>
    <Splash 
      scrollY={scrollY} 
      background="banner6.jpg"
    />
    <div class="properties-content">
      <h2>“All Sold Out!”</h2>
      <h3>Come back soon for new properties!</h3>
    </div>
  </div>
);
export default PropertiesScreen;