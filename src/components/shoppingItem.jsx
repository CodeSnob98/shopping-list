import React from 'react'
import './common.css';

export default function Shopping(props) {
    return (
      <div className="main-bucket">
          <p>Name:{props.name}</p>
          <p>Price:{props.price}</p>
          <p>Count:{props.count}</p>
          <button onClick={()=>props.addItems(props.id,props.price,props.count)}>+</button>
      </div>
    );
  }