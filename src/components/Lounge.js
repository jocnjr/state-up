import React from 'react';

const Lounge = ({orders, addOrder}) => {
  return (
    <div className="component">
      <h1>Lounge Component</h1>
      <h2>Orders: {orders}</h2>
      <h3>props.orders</h3> 
      <h3>props.addOrder</h3> 
      <button onClick={() => addOrder()}>Add new order</button> 
    </div>
  )
}

export default Lounge;