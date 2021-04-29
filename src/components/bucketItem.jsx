import React from 'react'
import './common.css';

export default function Bucket(props) {
    return (
      <div className="main-shopping">
          <p>Name:{props.name}</p>
          <p>Price:{props.price}</p>
          <p>Count:{props.count}</p>
          <button onClick={()=>props.removeItems(props.id,props.price,props.count)}>-</button>
      </div>
    );
  }