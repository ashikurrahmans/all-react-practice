import React from "react";

export default class Apps extends React.Component {
  state = {
    count: 0,
  };

  incrementHandle = () => {};
  decrementHandle = () => {};
  resetHandle = () => {};

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.incrementHandle}>Increment</button>
        <button onClick={this.decrementHandle}>Decrement</button>
        <button onClick={this.resetHandle}>Reset</button>
      </div>
    );
  }
}
