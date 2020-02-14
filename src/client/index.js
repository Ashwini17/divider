import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    count: 10,
  };
  multiply = () =>{
    const currentValue = this.state.count;
    this.setState({
      count: currentValue * 2,
    });
  }
  devide = () =>{
    const currentValue = this.state.count;
    this.setState({
      count: currentValue / 2,
    });
  }

  render(){
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick= {this.multiply}>*</button>
      <button onClick= {this.devide}>/</button>
    </div>
  }
}

render(<App />, document.getElementById('root'));