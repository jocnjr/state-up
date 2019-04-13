import React from 'react';

const Bar = ({orders, addOrder}) => {
  return (
    <div className="component">
      <h1>Bar Component</h1>
      <h2>Orders: {orders}</h2>
      <h3>props.orders</h3> 
      <h3>props.addOrder</h3> 
      <button onClick={() => addOrder()}>Add new order</button> 
    </div>
  )
}

export default Bar;