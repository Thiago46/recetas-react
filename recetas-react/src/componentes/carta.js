import React from 'react';
import './carta.css';

const Card = (props) => {
    return (
      <div className="card-container">
        <div className="image-container">
          <img src={props.imageSrc} alt={props.imageAlt} />
        </div>
        <div className="content-container">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="list-container">
        
            {props.items.map((item, index) => (
               <p>{props.tags}</p>
            ))}
        
        </div>
      </div>
    );
  };
  
  export default Card;