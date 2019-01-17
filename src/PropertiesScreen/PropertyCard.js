import React from 'react';
import Button from '../shared/Button';
import './PropertyCard.css';
let PropertyCard = ({image, address, price, bedrooms, bathrooms, size, date}) => (
  <div className="property-card">
    <img className="property-card-image" src={image} />
    <div className="property-card-container">
      <h2 className="property-card-address">{address}</h2>
      <div className="property-card-price">{price}</div>
      <div className="property-card-details">
        <div><strong>Bedrooms: </strong>{bedrooms}</div>
        <div><strong>Bathrooms: </strong>{bathrooms}</div>
        <div><strong>Property size:  </strong>{size}</div>
      </div>
      <div className="property-card-footer">
        <div className="property-card-date">{date}</div>
        <Button>Compare</Button>
        <Button>Details</Button>
      </div>
    </div>
  </div>
);
export default PropertyCard;