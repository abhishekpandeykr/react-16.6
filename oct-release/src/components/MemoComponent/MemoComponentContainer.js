import React, { Component } from 'react';
import Input from '../../presentationComponents/InputComponent';
import MemoPresentation from '../presentationComponents/MemoPresentation';
import MemoizedPresentation from '../presentationComponents/MemoizedPresentation';

export default class MemoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 'this is about Testing Page'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <Input type="text" placeholder="Type your test" label="Memo Demo" onChange={this.handleChange} />
        <MemoPresentation withMemo={this.state.value} />
        <MemoizedPresentation withMemo={this.state.value} />
      </div>
    );
  }
}
