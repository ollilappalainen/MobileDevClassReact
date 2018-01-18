import React from 'react';

export default class Counter extends React.Component {
  constructor() { 
    super();   
    this.state = {countNumber: 0}

    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  increaseCount() {    
    let count = this.state.countNumber;
    let newCount = count + 1;
    this.setState({
      countNumber: newCount
    });
  }

  decreaseCount() {
    let count = this.state.countNumber;
    let newCount = count - 1;    
    this.setState({
      countNumber: newCount
    });
  }

  resetCount() {
    this.setState({
      countNumber: 0
    });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.countNumber} </p>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount}>-</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}