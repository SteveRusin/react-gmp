import { Component } from "react";

export class CounterComponent extends Component {
  state = {
    count: 0,
  };

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <>
        <h1>CounterComponent</h1>
        {this.state.count}
        <div>
          <button onClick={this.increment.bind(this)}>increment</button>
          <button onClick={this.decrement.bind(this)}>decrement</button>
        </div>
      </>
    );
  }
}
