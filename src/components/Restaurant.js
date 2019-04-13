import React, { Component } from 'react';
import Bar from './Bar';
import MainRoom from './MainRoom';

class App extends Component {
  state = {
    orders: 0
  }

  addOrder = () => {
    this.setState({
      orders: this.state.orders + 1
    });
  }

  render() {
    return (
      <div className="component">  
        <h1>Restaurant - Lifting state UP!</h1>     
        <h2>Orders: {this.state.orders}</h2>
        <h3>this.state.orders</h3> 
        <h3>this.addOrder</h3> 
        <Bar orders={this.state.orders} addOrder={() => this.addOrder()}/>
        <MainRoom orders={this.state.orders} addOrder={() => this.addOrder()}/>
      </div>
    );
  }
}

export default App;
