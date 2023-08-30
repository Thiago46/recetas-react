import React from 'react';
import './carta.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.imageSrc}/>
      </div>
      <div className="content-container">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="list-container">
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
