import React, { Component } from 'react';
import Input from '../presentationComponents/InputComponent';
import MemoPresentation from '../presentationComponents/MemoPresentation';
import MemoizedPresentation from '../presentationComponents/MemoizedPresentation';

export default class MemoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 'Testing Memoization of React v16'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Testing New Feature of React Memoization</h3>
        <Input type="text" placeholder="Type your test" label="Memo Demo" onChange={this.handleChange} />
        <div className="withoutMemo" style={{ float: 'left' }}>
          <MemoPresentation withMemo={this.state.value} />
        </div>
        <div className="withMemo" style={{ float: 'right' }}>
          <MemoizedPresentation withMemo={this.state.value} />
        </div>
      </div>
    );
  }
}
