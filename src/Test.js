import React from "react";

export default class Test extends React.Component {
  state = {
    count: 0,
  };

  incrementHandle = () => {
    this.setState({
      state: this.state.count + 1,
    });
  };
  decrementHandle = () => {
    this.setState({
      state: this.state.count - 1,
    });
  };
  resetHandle = () => {
    this.setState({
      state: 0,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementHandle}>Increment</button>
        <button onClick={this.decrementHandle}>Decrement</button>
        <button onClick={this.resetHandle}>Reset</button>
      </div>
    );
  }
}
