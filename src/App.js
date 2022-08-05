import React from "react";
import Cards from "./Cards";
import Form from "./Components/Form";
import Forms from "./Components/Forms";

class App extends React.Component {
  state = {
    count: 0,
    cardNum: [10, 33, 40, 22],
  };

  incrementHandle = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementHandle = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  resetHandle = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={this.incrementHandle.bind(this)}>Increment</button>
        <button onClick={this.decrementHandle}>Decrement</button>
        <button onClick={this.resetHandle}>Reset</button>
        <Cards cardNum={this.state.cardNum}></Cards>
        {/* <Form></Form> */}
        <Forms></Forms>
      </div>
    );
  }
}

export default App;
