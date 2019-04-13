import React from 'react';
import Lounge from './Lounge'

const MainRoom = ({orders, addOrder}) => {
  return (
    <div className="component">
      <h1>Main Room Component</h1>
      <h2>Orders: {orders}</h2>
      <h3>props.orders</h3> 
      <h3>props.addOrder</h3> 
      <Lounge orders={orders} addOrder={() => addOrder()} /> 
    </div>
  )
}

export default MainRoom;